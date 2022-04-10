import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'overview',
    loadChildren: () =>
      import('./pages/overview-page/overview-page.module').then(
        (m) => m.OverviewPageModule
      ),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./pages/details-page/details-page.module').then(
        (m) => m.DetailsPageModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: '/overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
