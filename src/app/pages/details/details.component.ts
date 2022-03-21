import {Component, OnInit} from '@angular/core';
import {Pet} from "../../models/Pet";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public pet: Pet = {animal: "default", id: 0, name: "default"};

  constructor() { }

  ngOnInit(): void {
  }

}
