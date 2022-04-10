import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-container',
  templateUrl: './overview-container.component.html',
  styleUrls: ['./overview-container.component.scss'],
})
export class OverviewContainerComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('Overview Container constructor');
  }
  ngOnInit(): void {
    console.log('Overview Container ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Overview Container ngOnDestroy');
  }
}
