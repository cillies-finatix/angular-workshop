import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadStoreSamples } from 'src/app/root-store/features/store-sample/actions/store-sample.actions';
import { selectStoreSamples, selectStoreSamplesLoading } from 'src/app/root-store/features/store-sample/selectors/store-sample.selectors';

@Component({
  selector: 'app-overview-container',
  templateUrl: './overview-container.component.html',
  styleUrls: ['./overview-container.component.scss']
})
export class OverviewContainerComponent {

  // Try to open: http://localhost:4200/overview


  samples$ = this.store.select(selectStoreSamples);
  loading$ = this.store.select(selectStoreSamplesLoading);

  constructor(private readonly store: Store) { }

  load() {
    this.store.dispatch(loadStoreSamples());
  }

}
