import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/overview/overview.module').then(m => m.OverviewModule)
  },
  { path: 'details/:id', loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
