import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseService } from '../../services/database.service';
import { Сredentials } from '../../models/credentials';
import { LogEntry } from 'src/app/models/log-entry';
import { trigger, style, state, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css'],
  // animations for showing/hiding divs
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
export class DatabaseDialog implements OnInit {

  public dblogs: LogEntry[] = null;
  public loadingLogsData: boolean = false;

  constructor(public dialogRef: MatDialogRef<DatabaseDialog>, 
    @Inject(MAT_DIALOG_DATA) public data: { credentials: Сredentials }, 
    public databaseApi: DatabaseService) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  // loading data using database service
  loadLogs() {
    this.loadingLogsData = true;
    this.databaseApi.loadData().subscribe(data => {
      console.debug('-- received logs from database', data);
      this.dblogs = data;
      this.loadingLogsData = false;
    })
  }

  // removing data using database service
  clearLogs() {
    this.loadingLogsData = true;
    this.databaseApi.removeData().subscribe(res => {
      console.debug('-- cleared logs database', res);
      this.loadLogs();
    });
  }

  ngOnInit(): void {
    this.loadLogs();
  }

}
