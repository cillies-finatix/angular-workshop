import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [{ path: '', canActivate: [AuthGuard], component: DetailsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPageRoutingModule { }
