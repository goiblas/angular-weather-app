import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Coords } from './models/coords';
import { WeatherService } from './services/weather.service';
import { Observable } from 'rxjs';
import { DetailedWeather, WeeklyWeather } from './models/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

detailedWeather$: Observable<DetailedWeather[]>;
weeklyWeather$: Observable<WeeklyWeather[]>;

  constructor(private service: WeatherService) {}

  ngOnInit() {
    this.detailedWeather$ = this.service.getMainWeather();
    this.weeklyWeather$ = this.service.getWeeklyWeather();
  }
  onSetCoords(coords: Coords) {
    this.service.setCoords(coords);
  }
}
