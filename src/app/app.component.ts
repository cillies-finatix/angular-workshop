import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-workshop';

  ngOnInit(): void {
    console.log('AppComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('AppComponent ngOnDestroy');
  }
}
