import { Component, OnInit } from '@angular/core';
import { SampleWithTokenService } from './services/sample-with-token.service';
import { SampleService } from './services/sample.service';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-workshop';
  constructor(public dialog: MatDialog) {}
  /**
  constructor(
    private readonly sampleService: SampleService,
    private readonly sampleWithTokenService: SampleWithTokenService,
    ){

  }
  ngOnInit(): void {
    this.sampleService.doSomething();
    this.sampleWithTokenService.doSomething();
  }
  /**/

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: 'My Name'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with', result);
    });
  }
}
