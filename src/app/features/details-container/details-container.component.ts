import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrls: ['./details-container.component.scss']
})
export class DetailsContainerComponent {
  // Try to open: http://localhost:4200/details/some-string-id
  idFromUrl$ = this.route.params.pipe(pluck('id'))

  constructor(private readonly route: ActivatedRoute) {}
}
