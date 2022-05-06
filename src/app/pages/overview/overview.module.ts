import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import {TileComponent} from "../../shared/tile/tile.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    OverviewComponent,
    TileComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    ReactiveFormsModule
  ]
})
export class OverviewModule { }
