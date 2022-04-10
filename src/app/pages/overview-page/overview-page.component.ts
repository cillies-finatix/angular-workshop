import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
})
export class OverviewPageComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('Overview Page constructor');
  }
  ngOnInit(): void {
    console.log('Overview Page ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Overview Page ngOnDestroy');
  }
}
