import { Component, OnInit, Input } from '@angular/core';
import { WeeklyWeather } from './../../models/weather';
@Component({
  selector: 'app-forecast-weekly',
  templateUrl: './forecast-weekly.component.html',
  styleUrls: ['./forecast-weekly.component.scss']
})
export class ForecastWeeklyComponent implements OnInit {
@Input() weeklyWeather: WeeklyWeather[];

  constructor() { }

  ngOnInit() {
  }

  get hasInformation() {
    return this.weeklyWeather && this.weeklyWeather.length > 0;
  }
}
