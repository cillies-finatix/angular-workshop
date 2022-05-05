import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-overview-container',
  templateUrl: './overview-container.component.html',
  styleUrls: ['./overview-container.component.scss']
})
export class OverviewContainerComponent {

  // Try to open: http://localhost:4200/overview

  globalState$ = this.store.pipe();

  constructor(private store: Store) {
  }
}
