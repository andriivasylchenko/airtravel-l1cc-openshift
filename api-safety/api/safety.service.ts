/**
 * Safe Place and Authorization
 *  This API incorporates Auth flow to obtain access token. For more details visit **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization)**.     Please also be aware that our test environment is based on a subset of the production, this API in test only returns a few selected cities. You can find the list in our **[data collection](https://github.com/amadeus4dev/data-collection)**.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Error400 } from '../model/error400';
import { Error500 } from '../model/error500';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SafetyService {

    protected basePath = 'https://test.api.amadeus.com/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Returns safety rating for a given location and radius.
     * 
     * @param latitude Latitude (decimal coordinates)
     * @param longitude Longitude (decimal coordinates)
     * @param radius radius of the search in Kilometer. Can be from 0 to 20, default value is 1 Km.
     * @param pageLimit maximum items in one page
     * @param pageOffset start index of the requested page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSafetyRanking(latitude: number, longitude: number, radius?: number, pageLimit?: number, pageOffset?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getSafetyRanking(latitude: number, longitude: number, radius?: number, pageLimit?: number, pageOffset?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getSafetyRanking(latitude: number, longitude: number, radius?: number, pageLimit?: number, pageOffset?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getSafetyRanking(latitude: number, longitude: number, radius?: number, pageLimit?: number, pageOffset?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (latitude === null || latitude === undefined) {
            throw new Error('Required parameter latitude was null or undefined when calling getSafetyRanking.');
        }

        if (longitude === null || longitude === undefined) {
            throw new Error('Required parameter longitude was null or undefined when calling getSafetyRanking.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (latitude !== undefined && latitude !== null) {
            queryParameters = queryParameters.set('latitude', <any>latitude);
        }
        if (longitude !== undefined && longitude !== null) {
            queryParameters = queryParameters.set('longitude', <any>longitude);
        }
        if (radius !== undefined && radius !== null) {
            queryParameters = queryParameters.set('radius', <any>radius);
        }
        if (pageLimit !== undefined && pageLimit !== null) {
            queryParameters = queryParameters.set('page[limit]', <any>pageLimit);
        }
        if (pageOffset !== undefined && pageOffset !== null) {
            queryParameters = queryParameters.set('page[offset]', <any>pageOffset);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.amadeus+json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/vnd.amadeus+json'
        ];

        return this.httpClient.get<any>(`${this.basePath}/safety/safety-rated-locations`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}