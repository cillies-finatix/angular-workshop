import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as StoreSampleActions from '../actions/store-sample.actions';



@Injectable()
export class StoreSampleEffects {

  loadStoreSamples$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(StoreSampleActions.loadStoreSamples),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => StoreSampleActions.loadStoreSamplesSuccess({ data })),
          catchError(error => of(StoreSampleActions.loadStoreSamplesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
