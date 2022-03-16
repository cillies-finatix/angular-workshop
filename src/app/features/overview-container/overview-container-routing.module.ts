import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewContainerComponent } from './overview-container.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [{ path: '', canActivate: [AuthGuard], component: OverviewContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewContainerRoutingModule { }
