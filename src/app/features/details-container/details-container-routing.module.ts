import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { DetailsContainerComponent } from './details-container.component';

const routes: Routes = [{ path: '', canActivate: [AuthGuard],  component: DetailsContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsContainerRoutingModule { }
