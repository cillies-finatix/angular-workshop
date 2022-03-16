import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from './components/demo.module';
import { ConsoleLoggerService } from './services/logger/console-logger.service';
import { LoggerService } from './services/logger/logger.service';
import { LOGGER_TOKEN } from './services/logger/logger-token';
import { AlertLoggerService } from './services/logger/alert-logger.service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { DetailsContainerModule } from './features/details-container/details-container.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './root-store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { RootStoreModule } from './root-store/root-store.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoModule,
    SharedModule,
    CoreModule,
    DetailsContainerModule,
    RootStoreModule,
  ],
  providers: [
    { provide: LoggerService, useClass: ConsoleLoggerService },
    { provide: LOGGER_TOKEN, useClass: AlertLoggerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
