import {Component, OnInit} from '@angular/core';
import {CommunicationService} from "../../services/communication.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private communicationService: CommunicationService) {
    this.communicationService.observable.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
