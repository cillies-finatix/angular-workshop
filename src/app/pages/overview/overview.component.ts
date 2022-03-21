import {Component, OnInit} from '@angular/core';
import {CommunicationService} from "../../services/communication.service";
import {Pet} from "../../models/Pet";
import {Router} from "@angular/router";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public pets: Pet[] = [];

  constructor(private communicationService: CommunicationService, private router: Router) { }

  ngOnInit(): void {
    this.communicationService.observable.subscribe(value => this.pets = value);
  }

  logTileName(event: number) {
    this.router.navigate(['/details', event]);
  }
}
