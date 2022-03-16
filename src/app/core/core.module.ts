import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RetryInterceptor } from './interceptors/retry.interceptor';



@NgModule({
  declarations: [],
  providers: [
    // Multi Provider liefert ein Array von Services/Werten.
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
