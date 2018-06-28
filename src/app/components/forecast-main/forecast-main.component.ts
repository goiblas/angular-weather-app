import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { DetailedWeather } from '../../models/weather';

@Component({
  selector: 'app-forecast-main',
  templateUrl: './forecast-main.component.html',
  styleUrls: ['./forecast-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastMainComponent implements OnInit, OnChanges {
  @Input() detailedWeather: DetailedWeather[];
  @ViewChild('main') public main: ElementRef;

  detailedWeatherSelected: DetailedWeather | null = null;
  hours = [];
  constructor() { }
  get hasInformation(): boolean {
    return this.detailedWeather && this.detailedWeather.length > 0;
  }
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
    this.detailedWeatherSelected = this.detailedWeather[ev.target.value];
  }

}
