import {Component, OnInit} from '@angular/core';
import {CommunicationService} from "../../services/communication.service";
import {Pet} from "../../models/Pet";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public pets: Pet[] = [];

  constructor(private communicationService: CommunicationService) {
    this.communicationService.observable.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
