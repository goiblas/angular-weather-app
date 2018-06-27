import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coords } from '../models/coords';

@Injectable({
  providedIn: 'root'
})
export class ProxyApiService {

  private appId = '0d0efe5a3914435b1b2724cf79b37fe5';
  constructor(private http: HttpClient) {}

  getWeatherByCoords({lat, lon}: Coords): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${this
        .appId}&units=metric`
    );
  }
}
