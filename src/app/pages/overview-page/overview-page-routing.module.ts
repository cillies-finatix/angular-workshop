import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { OverviewPageComponent } from './overview-page.component';

const routes: Routes = [{ path: '', canActivate: [AuthGuard], component: OverviewPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewPageRoutingModule { }
