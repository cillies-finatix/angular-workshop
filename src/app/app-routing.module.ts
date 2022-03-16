import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'overview', loadChildren: () => import('./features/overview-container/overview-container.module').then(m => m.OverviewContainerModule) },
  { path: 'details/:id', loadChildren: () => import('./features/details-container/details-container.module').then(m => m.DetailsContainerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
