import { Component, Input, OnChanges, ElementRef, ViewChild, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { DetailedWeather } from '../../models/weather';

@Component({
  selector: 'app-forecast-main',
  templateUrl: './forecast-main.component.html',
  styleUrls: ['./forecast-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastMainComponent implements  OnChanges {

  @Input() detailedWeather: DetailedWeather[];
  @ViewChild('main') public main: ElementRef;

  detailedWeatherSelected: DetailedWeather | null = null;
  hours: string[];
  firstHour: number | null = null;
  hourSelected = 0;

  constructor() { }
  get hasInformation(): boolean {
    return this.detailedWeather && this.detailedWeather.length > 0;
  }

  ngOnChanges() {
    this.hours = [];
    if ( this.hasInformation) {
      this.detailedWeatherSelected = this.detailedWeather[this.hourSelected];
      this.detailedWeather.forEach( weather => {
        this.hours.push(weather.hour);
      });
      this.firstHour = Number(this.hours[0].split(':')[0]);
      this.main.nativeElement.focus();
    }
  }

  onChangeSelect(selected) {
    this.hourSelected = selected;
    this.detailedWeatherSelected = this.detailedWeather[selected];
  }
  isToday(hourString: string): boolean {
    const currentHour = Number(hourString.split(':')[0]);
    return this.firstHour <= currentHour;
  }

}
