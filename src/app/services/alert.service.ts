import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private resetSubject = new Subject<any>();
  initiateReset = this.resetSubject.asObservable();

  constructor(private alertBar: MatSnackBar, private zone: NgZone) { }

  showAlert(message) {

    // NgZone workaround required to avoid showing alert twice 
    this.zone.run(() => {
      this.alertBar.open(message); 

      // way of calling a function in component to clear up search params and data in case error has occured
      this.resetSubject.next();
    })
  }
}
