import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { AExampleSimpleModule } from './a-example-simple/a-example-simple.module';
import { BExampleHooksModule } from './b-example-hooks/b-example-hooks.module';
import { CExampleTemplateModule } from './c-example-template/c-example-template.module';
import { DExampleDirectivesModule } from './d-example-directives/d-example-directives.module';
import { EExamplePipesModule } from './e-example-pipes/e-example-pipes.module';



@NgModule({
  exports: [DemoComponent],
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    AExampleSimpleModule,
    BExampleHooksModule,
    CExampleTemplateModule,
    DExampleDirectivesModule,
    EExamplePipesModule,
  ]
})
export class DemoModule { }
