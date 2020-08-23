import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

  constructor(private alerts: AlertService) {}

  handleError(error) {

    // logging error and showing on-screen alert   
    console.error('An error has occured', error);
    this.alerts.showAlert('An error has occured. Check console for details.');
  }
}
