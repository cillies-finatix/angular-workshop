import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DExampleDirectivesComponent } from './d-example-directives.component';
import { HighlighterDirective } from './highlighter.directive';



@NgModule({
  exports: [DExampleDirectivesComponent],
  declarations: [
    DExampleDirectivesComponent,
    HighlighterDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DExampleDirectivesModule { }
