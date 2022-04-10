import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('Details Page constructor');
  }
  ngOnInit(): void {
    console.log('Details Page ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Details Page ngOnDestroy');
  }
}
