import { Component } from '@angular/core';

@Component({
  selector: 'app-c-example-template',
  templateUrl: './c-example-template.component.html',
  styleUrls: ['./c-example-template.component.scss']
})
export class CExampleTemplateComponent {

  myVar = 'My var value';
  isVisible = true;
  isInvisible = false;
  items = [1,2,3,4,5];
  moneyValue =  9.99;
  bindedCssClass = 'my-class an-another';
  htmlString = 'HTML <strong>funktioniert</strong>';
  buttonClicked(event: Event) { console.log('Button wurde geklickt', event); }

}
