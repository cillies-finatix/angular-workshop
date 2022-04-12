import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  // Umleitung von / auf /sample
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Umleitung "legacy" route auf neue Route
  { path: 'home', canLoad: [AuthGuard], loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'details', canLoad: [AuthGuard], loadChildren: () => import('./details-page/details-page.module').then(m => m.DetailsPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
