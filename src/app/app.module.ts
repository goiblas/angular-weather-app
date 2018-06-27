import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// necesario para trabajar con la api
import { HttpClientModule } from '@angular/common/http';

import { DragScrollModule } from 'ngx-drag-scroll';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';
import { SearchComponent } from './components/search/search.component';
import { ForecastMainComponent } from './components/forecast-main/forecast-main.component';
import { ForecastWeeklyComponent } from './components/forecast-weekly/forecast-weekly.component';
import { GetWeekdayPipe } from './utils/get-weekday.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ForecastMainComponent,
    ForecastWeeklyComponent,
    GetWeekdayPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragScrollModule,
    AgmCoreModule.forRoot({
      apiKey: environment.placesApiKey,
      libraries: ['places'],
      language: environment.language
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
