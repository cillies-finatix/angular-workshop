import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-b-example-hooks',
  templateUrl: './b-example-hooks.component.html',
  styleUrls: ['./b-example-hooks.component.scss']
})
export class BExampleHooksComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  
  ngOnInit(): void {
    console.log('BExampleHooksComponent.ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('BExampleHooksComponent.ngOnChanges', changes);
  }
  ngAfterViewInit(): void {
    console.log('BExampleHooksComponent.ngAfterViewInit');
  }


  ngOnDestroy(): void {
    console.log('BExampleHooksComponent.ngOnDestroy');
  }



}
