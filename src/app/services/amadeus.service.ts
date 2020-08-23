import { Injectable } from '@angular/core';
import { SecurityService } from '../../../api-safety';
import { FlightsService } from '../../../api-flights';
import { LocationsService } from '../../../api-locations';
import { SafetyService } from '../../../api-safety';
import { FlightsQuery } from '../models/flights-query';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { Сredentials } from '../models/credentials';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AmadeusService {

  private accessToken: string = null;

  private runningLocal: boolean = false;

  // API credentials to use Amadeus API. Obtain yours by following the instructions https://developers.amadeus.com/get-started/get-started-with-self-service-apis-335
  private apiCredentials: Сredentials = {
    key: null,
    secret: null
  }

  constructor(private securityApi: SecurityService, private flightsApi: FlightsService, private locationsApi: LocationsService, private safetyApi: SafetyService) { }

  // function to update or just provide a status of running local param
  public verifyRunningLocal(value?: boolean) {
    if (value!== null && value !== undefined) {
          this.runningLocal = value;
          return this.runningLocal;
    } else return this.runningLocal;
  } 

  
  // function to update or just provide credentials to Amadeus APIs
  public verifyApiCredentials(api_key?, api_secret?) {
    if (api_key && api_secret) {
          this.apiCredentials = {
            key: api_key,
            secret: api_secret
          };
          return this.apiCredentials;
    } else return this.apiCredentials;
  } 

  // function to obtain access token that is required to make any data call to Amadeus APIs
  public obtainToken(): Promise<any> {

    return new Promise((resolve, reject) => {
      this.securityApi.getAccessToken('client_credentials', this.apiCredentials.key, this.apiCredentials.secret).subscribe(value => {
        if ("access_token" in value) {
          resolve(value);
        } else {
          reject();
        }
      })
    })
  }

  // function to provide saved token or call obtain function and get a new one
  public provideToken(): Observable<any> {
    return Observable.fromPromise(new Promise((resolve, reject) => {
      if (this.accessToken) {
        console.debug('-- found saved access_token')
        resolve(this.accessToken);
      } else {
        console.debug('-- requesting new access_token from Amadeus')
        this.obtainToken().then(
          value => {
            this.accessToken = value.access_token
            console.debug('-- access_token received')
            resolve(this.accessToken);
          },
          error => {
            console.debug('!-- cannot get access_token', error)
            reject();
          }
        )
      }
    }))
  }

  // connection with generated Amadeus flights api to pre-fill params and format dates
  searchFlights(flightsQuery: FlightsQuery) {
    return this.flightsApi.getFlightOffers(flightsQuery.originLocationCode, flightsQuery.destinationLocationCode, moment(flightsQuery.departureDate).format('YYYY-MM-DD'), moment(flightsQuery.returnDate).format('YYYY-MM-DD'), flightsQuery.adults, flightsQuery.max);
  }

  // connection with generated Amadeus locations api to pre-fill params and format dates
  getLocationDetails(cityName) {
    return this.locationsApi.getAirportCitySearch(['CITY'], cityName, null, 1);
  }

  // connection with generated Amadeus safety score api to pre-fill params and format dates
  getSafetyDetails(lat, long) {
    return this.safetyApi.getSafetyRanking(lat, long, 20, 1);
  }
}