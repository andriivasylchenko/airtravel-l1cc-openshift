import { Injectable } from '@angular/core';
import { Сredentials } from '../models/credentials';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import moment from 'moment';
import { LogEntry } from '../models/log-entry';
import { FlightsQuery } from '../models/flights-query';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private dbLogs: boolean = false;

  // basic auth credentials for db access through node runtime api
  private dbCredentials: Сredentials = {
    key: 'secret_user',
    secret: 'secret_password'
  }

  constructor(private http: HttpClient) {}

  // function to update or just provide a status of running local param
  public verifyDbLogs(value?: boolean) {
    if (value!== null && value !== undefined) {
          this.dbLogs = value;
          return this.dbLogs;
    } else return this.dbLogs;
  }

  // function to update or just provide credentials to Amadeus APIs
  public verifyDbCredentials(user_key?, user_secret?) {
    if (user_key && user_secret) {
        this.dbCredentials = {
          key: user_key,
          secret: user_secret
        };
        return this.dbCredentials;
    } else return this.dbCredentials;
  } 

  // function to generate HTTP request options
  private getHttpOptions(setType?) {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa(`${this.dbCredentials.key}:${this.dbCredentials.secret}`));
    // required not to show in-browser login window in case of failed auth
    headers = headers.append("No-Auth-Challenge", "true");
    if (setType) headers = headers.append("Content-Type", "application/json");

    return {
			headers: headers
		}
  }

  // function to load logs from database
  public loadData() {
		return this.http.get<LogEntry[]>('/database/getData', this.getHttpOptions());
  }
  
  // function to submit log to database
  public submitData(data: FlightsQuery) {
		return this.http.post('/database/postData', { timestamp: moment().format(), query: data }, this.getHttpOptions(true));
  }
  
  // function to clear all data in db
  public removeData() {
    return this.http.get('/database/removeData', this.getHttpOptions());
	}

}