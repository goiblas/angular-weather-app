import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { DetailedWeather } from '../../models/weather';

@Component({
  selector: 'app-forecast-main',
  templateUrl: './forecast-main.component.html',
  styleUrls: ['./forecast-main.component.scss']
})
export class ForecastMainComponent implements OnInit, OnChanges {
  @Input() detailedWeather: DetailedWeather[];
  @ViewChild('main') public main: ElementRef;

  detailedWeatherSelected: DetailedWeather | null = null;
  hours = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if ( this.hasInformation) {
      this.detailedWeatherSelected = this.detailedWeather[0];
      this.detailedWeather.forEach( weather => {
        this.hours.push(weather.hour);
      });
      this.main.nativeElement.focus();
    }
  }

  onChangeSelect(ev) {
    console.log(ev.target.value);
    this.detailedWeatherSelected = this.detailedWeather[ev.target.value];
  }
  get hasInformation(): boolean {
    return this.detailedWeather && this.detailedWeather.length > 0;
  }
}
