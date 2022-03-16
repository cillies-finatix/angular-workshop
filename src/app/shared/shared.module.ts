import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from './list/list.module';
import { ListItemModule } from './list-item/list-item.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListModule,
    ListItemModule
  ],
  exports: [
    CommonModule,
    ListModule,
    ListItemModule
  ],
})
export class SharedModule { }
