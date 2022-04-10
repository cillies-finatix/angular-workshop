import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OverviewContainerComponent } from './overview-container.component';

@NgModule({
  exports: [OverviewContainerComponent],
  declarations: [OverviewContainerComponent],
  imports: [CommonModule, RouterModule],
})
export class OverviewContainerModule {
  ngOnInit(): void {
    console.log('Overview Page ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Overview Page ngOnDestroy');
  }
}
