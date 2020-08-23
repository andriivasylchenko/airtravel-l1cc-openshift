import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AmadeusService } from '../services/amadeus.service';
import 'rxjs/add/operator/mergeMap';
import { flightsSearchMock } from '../mocks/flights-search';
import { originLocationSearchMock, destinationLocationSearchMock } from '../mocks/locations-search';
import { safetyLocationSearchMock } from '../mocks/safety-search';
import { AlertService } from '../services/alert.service';


@Injectable()
export class OauthInterceptor implements HttpInterceptor {

  constructor(private amadeusApi: AmadeusService, private alerts: AlertService) {}

  // intercepting every HttpRequest
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // check if it goes to Amadeus APIs
    if (request.url.includes('/safety/safety-rated-locations') || request.url.includes('/shopping/flight-offers' ) || request.url.includes('/reference-data/locations' )) {

      // check if application running local (mocking web services)
      if (!this.amadeusApi.verifyRunningLocal()) {
        console.debug('-- intercepted Amadeus API request, looking for access_token')

        // obtaining and adding access token to the request
        return this.amadeusApi.provideToken().mergeMap(accessToken => {
          console.debug('-- injecting access_token into Amadeus API request')
          request = request.clone({
            setHeaders: {
              'Authorization': 'Bearer ' + accessToken
            }
          });      
  
          return next.handle(request);
        })
      } else {

        // application is running local, replying with local data instead of real API calls
        if (request.urlWithParams.includes('/reference-data/locations?subType=CITY&keyword=Chicago') || request.urlWithParams.includes('/reference-data/locations?subType=CITY&keyword=CHI')) return of(new HttpResponse<any>({ status: 200, body: originLocationSearchMock }));
        if (request.urlWithParams.includes('/reference-data/locations?subType=CITY&keyword=New%20York') || request.urlWithParams.includes('/reference-data/locations?subType=CITY&keyword=NYC')) return of(new HttpResponse({ status: 200, body: destinationLocationSearchMock }));
        if (request.url.includes('/shopping/flight-offers')) return of(new HttpResponse({ status: 200, body: flightsSearchMock }));
        if (request.url.includes('/safety/safety-rated-locations')) return of(new HttpResponse({ status: 200, body: safetyLocationSearchMock }));
      }
    } else {
      return next.handle(request);
    }
  }
}
