import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiCredentials } from '../../models/api-credentials';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<DatabaseDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { credentials: ApiCredentials, local: boolean, logs: boolean}) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
