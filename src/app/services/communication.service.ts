import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Pet} from "../models/Pet";


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private subject = new ReplaySubject<Pet[]>();
  public observable: Observable<Pet[]> = this.subject.asObservable();

  private url: string = 'http://pets-v2.dev-apis.com/pets?animal=dog';


  constructor(private httpClient: HttpClient) {
    this.getAnimals();
  }

  getAnimals() {
    this.httpClient.get<{ pets: Pet[] }>(this.url).subscribe(res => {
      this.subject.next(res.pets);
    });
  }
}
