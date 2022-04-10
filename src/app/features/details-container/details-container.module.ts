import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DetailsContainerComponent } from './details-container.component';

@NgModule({
  exports: [DetailsContainerComponent],
  declarations: [DetailsContainerComponent],
  imports: [CommonModule, RouterModule],
})
export class DetailsContainerModule {}
