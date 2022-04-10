import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrls: ['./details-container.component.scss'],
})
export class DetailsContainerComponent implements OnInit, OnDestroy {
  // Try to open: http://localhost:4200/details/some-string-id
  idFromUrl$ = this.route.params.pipe(pluck('id'));

  constructor(private readonly route: ActivatedRoute) {
    console.log('Details Container constructor');
  }

  ngOnInit(): void {
    console.log('Details Container ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Details Container ngOnDestroy');
  }
}
