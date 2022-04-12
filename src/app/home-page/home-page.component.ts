import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private einName: string = 'christian';

  detailRoute: any[] = ['/', 'details', this.einName, 'browser', 123123];
  constructor() { }

  ngOnInit(): void {
  }

}
