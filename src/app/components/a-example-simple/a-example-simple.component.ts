import { Component } from '@angular/core';

@Component({
  selector: 'app-a-example-simple',
  templateUrl: './a-example-simple.component.html',
  styleUrls: ['./a-example-simple.component.scss']
})
export class AExampleSimpleComponent {
  clickedButton() {
    console.log('My Button was cliked!');
  }

}
