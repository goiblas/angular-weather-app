import { Injectable } from '@angular/core';
import { ProxyApiService } from './proxy-api.service';
import { Coords } from '../models/coords';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { GroupWeather, DetailedWeather, WeeklyWeather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private detailedWeather$ = new Subject<DetailedWeather[]>();
  private weeklyWeather$ = new Subject<WeeklyWeather[]>();
  private loading$ = new BehaviorSubject<boolean>(false);

  constructor( private proxyApi: ProxyApiService) { }
/**
 * @returns Observable
 * Funciones para obtener los observables con los datos de la apliación
 */
  get loading(): Observable<boolean> {
    return this.loading$.asObservable();
  }
  getMainWeather(): Observable < DetailedWeather[] > {
    return this.detailedWeather$.asObservable();
  }
  getWeeklyWeather(): Observable <WeeklyWeather[]> {
    return this.weeklyWeather$.asObservable();
  }

  /**
   * @param  {Coords} coords
   * Función para definir las coordenadas del lugar donde queremos saber su pronóstico de tiempo
   */
  setCoords(coords: Coords) {

    // Lanzo el estado de cargando
    this.loading$.next(true);

    // Me conecto con la api através de mi proxy
    this.proxyApi.getWeatherByCoords(coords).pipe(

      // No necesito permanecer suscripto al api
      take(1),

      // Estructura la respuesta del servidor
      map(this.arrangeWeatherResponse)
    ).subscribe( ({ listDetailedWeather, listWeeklyWeather}: GroupWeather)  => {

      // Lanzo el nuevo estado de los observables
      this.weeklyWeather$.next(listWeeklyWeather);
      this.detailedWeather$.next(listDetailedWeather);

      // apago el estado cargando
      this.loading$.next(false);
    },
    // capturo los posibles errores del servidor del api
    err => console.error(err));
  }


  private arrangeWeatherResponse(response): GroupWeather {

    // si no tengo una respuesta 200 del servidor lanzo un error
    if (response.cod !== '200') {
      throw new Error('Ha ocurrido un error en la respuesta con el servidor');
    }

    // Constantes
    const NUMBER_OF_HOURS = 7;
    const MIDDAY = '12:00';
    const TODAY = new Date().getUTCDate();

    const listDetailedWeather: DetailedWeather[] = [];
    const listWeeklyWeather: WeeklyWeather[]  = [];


    // recorro la lista de resultado
    for ( let i = 0; i < response.list.length; i++ ) {
      const weather = response.list[i];
      const hour = weather.dt_txt.slice(-8, -3);
      const currentDay = new Date(weather.dt_txt).getUTCDate();
      // Separo pronestico detallado y semanal
      // solo me interasan los 10 primero como detallados
      if ( i <= NUMBER_OF_HOURS) {

        // creo un nuevo pronostico detallado
        const detaildWeather: DetailedWeather = {
          hour,
          temperature: weather.main.temp,
          date: weather.dt_txt,
          icon: {
            description: weather.weather[0].description,
            src: weather.weather[0].icon
          },
          wind: weather.wind.speed,
          rain: weather.rain && weather.rain['3h'] ? weather.rain['3h'] : 0,
          snow: weather.snow && weather.snow['3h'] ? weather.snow['3h'] : 0
        };

        // Añado el pronostico a array detallado
        listDetailedWeather.push(detaildWeather);
      }

      // Para obtener el pronóstico semanal de los días que no son el actual me quedo con el tiempo para mediodia
      if (currentDay !== TODAY && hour === MIDDAY) {
        // creo un nuevo pronostico semanal
        const weeklyWeather: WeeklyWeather = {
          date: weather.dt_txt,
          temperature: weather.main.temp,
          icon:  {
            description: weather.weather[0].description,
            src: weather.weather[0].icon
         }
        };

        // Añado el pronostico a array semanal
        listWeeklyWeather.push(weeklyWeather);
      }
    }

    // devuelvo un objeto con los dos pronosticos
    return { listDetailedWeather , listWeeklyWeather };
  }

}
