import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewContainerComponent } from './overview-container.component';
import { ListModule } from 'src/app/shared/list/list.module';



@NgModule({
  exports: [
    OverviewContainerComponent
  ],
  declarations: [
    OverviewContainerComponent
  ],
  imports: [
    CommonModule,
    ListModule,
  ]
})
export class OverviewContainerModule { }
