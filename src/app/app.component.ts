import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Coords } from './models/coords';
import { WeatherService } from './services/weather.service';
import { Observable, Subscription } from 'rxjs';
import { DetailedWeather, WeeklyWeather } from './models/weather';
import { BackgroundService } from './services/background.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

detailedWeather$: Observable<DetailedWeather[]>;
weeklyWeather$: Observable<WeeklyWeather[]>;
sub: Subscription;
  constructor(public service: WeatherService, private background: BackgroundService) {}

  ngOnInit() {
    this.detailedWeather$ = this.service.getMainWeather();
    this.weeklyWeather$ = this.service.getWeeklyWeather();
    this.background.init();
    this.sub = this.service.getWeatherDescription().subscribe( (keywords: string[]) => {
      this.background.setKeyWords(keywords);
    });
  }
  onSetCoords(coords: Coords) {
    this.service.setCoords(coords);
  }
}
