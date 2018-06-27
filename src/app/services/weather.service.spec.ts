import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { ProxyApiService } from './proxy-api.service';
import { ProxyApiServiceFake } from './proxy-api.service.fake';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: WeatherService,
          useClass: WeatherService,
          deps: [
            { provide: ProxyApiService, useClass: ProxyApiServiceFake }
          ]
        }]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
