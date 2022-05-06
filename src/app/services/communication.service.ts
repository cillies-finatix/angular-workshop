import {Injectable} from '@angular/core';
import {BehaviorSubject, concatMap, Observable, pluck, shareReplay, Subject, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Pet} from "../models/Pet";


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public readonly pets$: Observable<Pet[]>;

  private readonly reloadSubject = new BehaviorSubject<void>(undefined);

  // private readonly subject = new BehaviorSubject<Pet[]>([]);
  private readonly url: string = 'http://pets-v2.dev-apis.com/pets?animal=dog';

  constructor(private readonly httpClient: HttpClient) {
    this.pets$ = this.reloadSubject.pipe(
      concatMap(() => this.httpClient.get<{ pets: Pet[] }>(this.url)),
      pluck('pets'),
    );
  }

  public getPets() {
    /* if (!this.pets$) {
      this.pets$ = this.httpClient
        .get<{ pets: Pet[] }>(this.url)
        .pipe(
          pluck('pets'),
          shareReplay(1)
        );
    } */
    return this.pets$;
  }

  public flushPets() {
    this.reloadSubject.next();
  }
}
