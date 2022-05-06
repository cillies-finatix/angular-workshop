import {Component, OnInit} from '@angular/core';
import {CommunicationService} from "../../services/communication.service";
import {Pet} from "../../models/Pet";
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  public pets$: Observable<Pet[]>;
  eingabefeld: string = 'Initial Value';
  formGroup: FormGroup = new FormGroup({
    meineEingabe: new FormControl('Initiale Wert'),
  });

  constructor(private communicationService: CommunicationService, private router: Router) {
    this.pets$ = this.communicationService.getPets();
  }

  logTileName(event: number) {
    this.router.navigate(['/details', event]);
  }

  flush() {
    this.communicationService.flushPets();
  }

  onChange($event: Event) {
    console.log('onChange', ($event.target as HTMLInputElement).value);
  }
}
