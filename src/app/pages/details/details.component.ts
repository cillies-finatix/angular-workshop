import {Component} from '@angular/core';
import {Pet} from "../../models/Pet";
import {ActivatedRoute} from "@angular/router";
import {CommunicationService} from "../../services/communication.service";
import {map, mergeMap, Observable} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  public pet$: Observable<Pet | undefined>;

  constructor(private route: ActivatedRoute, private communicationService: CommunicationService) {
    this.pet$ = this.route.params
      .pipe(
        mergeMap((res) => this.communicationService.getPets()
          .pipe(
            map(petList => petList.find(
              pet => pet.id == res['id'])
            )
          )
        )
      );
  }

}
