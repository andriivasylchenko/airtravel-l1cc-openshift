import { Component, OnInit } from '@angular/core';
import { SafetyScore } from '../../api-safety';
import { FlightOffer, CarrierEntry, Dictionaries } from '../../api-flights';
import { Location } from 'api-locations';
import { AmadeusService } from '../app/services/amadeus.service';
import { MatDialog } from '@angular/material/dialog';
import { ApiCredentials } from './models/api-credentials';
import { SafetyScoreParameters } from './models/safety-score-params'
import { FlightsQuery } from './models/flights-query';
import { SettingsDialog } from './settings/settings.component';
import moment from 'moment';
import { defaultSearchParams, searchParamsMock } from './mocks/search-params';
import { AlertService } from './services/alert.service';
import { trigger, style, state, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations for showing/hiding panels
  animations: [
    trigger('fadeInOut', [
        state('in', style({opacity: 1})),
        transition(':enter', [
          style({opacity: 0}),
          animate(250)
        ]),
        transition(':leave', [
          animate(250, style({opacity: 0}))
        ])
    ])
  ]
})
export class AppComponent implements OnInit {

  // Amadeus API key & secret
  credentials: ApiCredentials = null;

  // search params
  flightsQuery: FlightsQuery = defaultSearchParams;

  // support of search params validation
  disableEdit: boolean = false;
  disableSearch: boolean = true;
  minDepartureDate: Date = new Date();
  minReturnDate: Date = moment(this.minDepartureDate).add(1, 'days').toDate();

  // data from Amadeus APIs
  flightsOffers: FlightOffer = null;
  flightsDictionaries: Dictionaries = null; 
  safetyScore: SafetyScore = null;
  locationData: Location = null;
  
  // variable to reflect data loading process during API calls 
  loadingData: boolean = false;

  // indication if safety data is available
  foundSafetyData: boolean = null;

  // safety score titles, variable locators and assotiated icons
  safetyScoreSettings: SafetyScoreParameters[] = [
    { title: 'Women\'s safety', locator: 'women', icon: 'face' },
    { title: 'Physical harm', locator: 'physicalHarm', icon: 'sports_kabaddi' },
    { title: 'Theft', locator: 'theft', icon: 'account_balance_wallet' },
    { title: 'Political freedom', locator: 'politicalFreedom', icon: 'account_balance' },
    { title: 'Health & Medical', locator: 'medical', icon: 'healing' },
    { title: 'LGBTQ Safety', locator: 'lgbtq', icon: 'looks' },
  ]

  constructor(private amadeusApi: AmadeusService, public dialog: MatDialog, public alerts: AlertService) { }

  // opening settings modal window
  openSettings(): void {
    console.debug('-- opening settings dialog');
    const dialogRef = this.dialog.open(SettingsDialog, {
      width: '500px',
      data: { credentials: this.credentials, local: this.amadeusApi.verifyRunningLocal(), logs: this.amadeusApi.verifyDbLogs() }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == undefined) {
        console.debug('-- settings dialog was closed, no updates saved');
      } else {
        console.debug('-- settings dialog was closed, syncing credentials');

        // syncing updates from settings dialog
        this.credentials = result.credentials;
        this.resetParams(result.local);
        this.amadeusApi.verifyDbLogs(result.logs);
      }
    });
  }

  // color coding safety scores 
  applyCSSClass(spec, value) {
    let prefix = '';
    if (spec == 'text') prefix = 'score-';
    if (spec == 'border') prefix = 'border-score-';

    if (value <= 33) return prefix + 'low';
    if (value > 33 && value <= 66) return prefix + 'average';
    if (value > 66) return prefix + 'high';

  }

  // providing risk level based on overall safety score
  checkRiskLevel(value) {
    if (value <= 33) return 'Low risk';
    if (value > 33 && value <= 66) return 'Average risk';
    if (value > 66) return 'High risk';
  }

  // function to clear/fill search params 
  resetParams(value?: boolean) {

    let newValue = value;
    if (newValue == null) {
      newValue = this.amadeusApi.verifyRunningLocal();
    } else {
      if (this.amadeusApi.verifyRunningLocal() !== newValue) {

        console.debug('-- setting running local setting to ', newValue)
        this.amadeusApi.verifyRunningLocal(newValue);
      }
    }

    this.disableEdit = newValue;
    this.disableSearch = !newValue;

    // filling search params - mocks if running local was selected
    this.flightsQuery = (newValue) ? searchParamsMock : defaultSearchParams;

    this.cleanData();
  }

  // cleaning search data
  cleanData() {
    this.loadingData = false;

    this.flightsOffers = null;
    this.flightsDictionaries = null;
    this.locationData = null;
    this.safetyScore = null;
    this.foundSafetyData = null;
  }

  // input data validator for flights search params to disable or enable search button
  validateQuery() {
    if (this.flightsQuery.departureDate) this.minReturnDate = moment(this.flightsQuery.departureDate).add(1, 'days').toDate();

    // disable search button if some fields are not filled
    if (this.flightsQuery.originLocationCode && this.flightsQuery.destinationLocationCode && this.flightsQuery.departureDate && this.flightsQuery.returnDate) {
      this.disableSearch = false;
    } else {
      this.disableSearch = true;
    }
  }

  // function to match airlines code from itinerary with airlines code from dictionaries to provide airline name
  formatAirlines(airlineCodes: any[], carriers: CarrierEntry) {
    let airlinesList = [];
    airlineCodes.forEach(airline => airlinesList.push(carriers[airline]))
    return airlinesList.toString();
  }

  // initiate search for flights
  initiateSearch() {

    // cleaning previous search or error data
    this.cleanData();
    
    this.loadingData = true;
    // STEP 1 - transform departure city name into IATA code using Amadeus location API
    this.amadeusApi.getLocationDetails(this.flightsQuery.originLocationCode).subscribe(originLocation => {
      console.debug('-- received origin location details', originLocation);
      this.flightsQuery.originLocationCode = originLocation.data[0].iataCode;

      // STEP 2 - transform destination city name into IATA code using Amadeus location API
      this.amadeusApi.getLocationDetails(this.flightsQuery.destinationLocationCode).subscribe(destinationLocation => {
        console.debug('-- received destination location details', destinationLocation);

           this.locationData = destinationLocation.data[0];

        this.flightsQuery.destinationLocationCode = this.locationData.iataCode;

        // STEP 3 - search for flight offers using obtained location IATA codes and dates provided by user
        this.amadeusApi.searchFlights(this.flightsQuery).subscribe(flightsData => {

          this.flightsOffers = flightsData.data;
          this.flightsDictionaries = flightsData.dictionaries;
          console.debug('-- received flights offers', flightsData);

          // safety data can be empty cause it is a test api, so can display what we have so far
          this.loadingData = false;

          // STEP 4 - get location safety score data using Amadeus APIs

          this.amadeusApi.getSafetyDetails(this.locationData.geoCode.latitude, this.locationData.geoCode.longitude).subscribe(safetyData => {
            console.debug('-- received safety data', safetyData);
            if (safetyData.data.length > 0) {
              this.safetyScore = safetyData.data[0].safetyScores;
            } else {
              this.foundSafetyData = false;
            }
          })
        })
      })
    })
  }

  ngOnInit() {
    // get credentials (if any hard-coded) during component init
    this.credentials = this.amadeusApi.verifyCredentials();
  }
}
