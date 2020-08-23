import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';

// additional modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

// Amadeus APIs
import { ApiModule as SafetyApiModule } from '../../api-safety';
import { ApiModule as FlightsApiModule } from '../../api-flights';
import { ApiModule as LocationsApiModule } from '../../api-locations';

// angular material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// custom things
import { OauthInterceptor } from './interceptors/oauth.interceptor';
import { SettingsDialog } from './settings/settings.component';
import { MomentPipe } from './pipes/moment.pipe';
import { ErrorHandlerService } from './services/error-handler.service'


@NgModule({
  declarations: [
    AppComponent,
    SettingsDialog,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SafetyApiModule,
    FlightsApiModule,
    LocationsApiModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatTableModule,
    MatGridListModule,
    MatSnackBarModule 
  ],
  providers: [
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: OauthInterceptor, multi: true },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000, verticalPosition: 'bottom', horizontalPosition: 'center'} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
