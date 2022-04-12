import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, pluck} from "rxjs";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log('Params als Dict: ', params);
    })
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
    })
  }

  ngOnInit(): void {
  }

}
