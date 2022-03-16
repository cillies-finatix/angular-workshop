import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as StoreSampleActions from '../actions/store-sample.actions';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class StoreSampleEffects {

  loadStoreSamples$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StoreSampleActions.loadStoreSamples),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */

        this.http.get<{results: Array<{name: string}>}>('https://pokeapi.co/api/v2/pokemon').pipe(
          map(response => response.results),
          map(list => list.map(item => item.name)),
          map(list => list.sort()),
          map(data => StoreSampleActions.loadStoreSamplesSuccess({ data })),
          catchError(error => of(StoreSampleActions.loadStoreSamplesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions, private readonly http: HttpClient) {}

}
