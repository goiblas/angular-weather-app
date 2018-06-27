import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyApiServiceFake {

constructor() {}
getWeatherByCoords(): Observable<any> {
  return of(fakeWeatherResult);
}
}
const fakeWeatherResult = {
cod: '200',
message: 0.0033,
cnt: 40,
list: [
  {
    dt: 1529668800,
    main: {
      temp: 6.41,
      temp_min: 4.89,
      temp_max: 6.41,
      pressure: 1009.25,
      sea_level: 1039.99,
      grnd_level: 1009.25,
      humidity: 100,
      temp_kf: 1.52
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 0.77, deg: 251.504 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-22 12:00:00'
  },
  {
    dt: 1529679600,
    main: {
      temp: 4.5,
      temp_min: 3.36,
      temp_max: 4.5,
      pressure: 1008.46,
      sea_level: 1039.4,
      grnd_level: 1008.46,
      humidity: 99,
      temp_kf: 1.14
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.06, deg: 247.502 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-22 15:00:00'
  },
  {
    dt: 1529690400,
    main: {
      temp: 2.8,
      temp_min: 2.04,
      temp_max: 2.8,
      pressure: 1007.49,
      sea_level: 1038.45,
      grnd_level: 1007.49,
      humidity: 100,
      temp_kf: 0.76
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.06, deg: 273.5 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-22 18:00:00'
  },
  {
    dt: 1529701200,
    main: {
      temp: 1.43,
      temp_min: 1.05,
      temp_max: 1.43,
      pressure: 1007.83,
      sea_level: 1038.88,
      grnd_level: 1007.83,
      humidity: 100,
      temp_kf: 0.38
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.11, deg: 281.502 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-22 21:00:00'
  },
  {
    dt: 1529712000,
    main: {
      temp: 10.14,
      temp_min: 10.14,
      temp_max: 10.14,
      pressure: 1008.69,
      sea_level: 1039.39,
      grnd_level: 1008.69,
      humidity: 89,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.51, deg: 257 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-23 00:00:00'
  },
  {
    dt: 1529722800,
    main: {
      temp: 14.65,
      temp_min: 14.65,
      temp_max: 14.65,
      pressure: 1007.15,
      sea_level: 1037.38,
      grnd_level: 1007.15,
      humidity: 69,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.52, deg: 252.005 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-23 03:00:00'
  },
  {
    dt: 1529733600,
    main: {
      temp: 12.87,
      temp_min: 12.87,
      temp_max: 12.87,
      pressure: 1006.85,
      sea_level: 1037.18,
      grnd_level: 1006.85,
      humidity: 70,
      temp_kf: 0
    },
    weather: [
      { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }
    ],
    clouds: { all: 12 },
    wind: { speed: 2.05, deg: 259.003 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-23 06:00:00'
  },
  {
    dt: 1529744400,
    main: {
      temp: 7.69,
      temp_min: 7.69,
      temp_max: 7.69,
      pressure: 1008.07,
      sea_level: 1038.89,
      grnd_level: 1008.07,
      humidity: 70,
      temp_kf: 0
    },
    weather: [
      { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' }
    ],
    clouds: { all: 12 },
    wind: { speed: 2.4, deg: 238.503 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-23 09:00:00'
  },
  {
    dt: 1529755200,
    main: {
      temp: 4.81,
      temp_min: 4.81,
      temp_max: 4.81,
      pressure: 1009,
      sea_level: 1039.98,
      grnd_level: 1009,
      humidity: 93,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 2.41, deg: 239.002 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-23 12:00:00'
  },
  {
    dt: 1529766000,
    main: {
      temp: 2.62,
      temp_min: 2.62,
      temp_max: 2.62,
      pressure: 1009.08,
      sea_level: 1040.33,
      grnd_level: 1009.08,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.86, deg: 254.001 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-23 15:00:00'
  },
  {
    dt: 1529776800,
    main: {
      temp: 1.09,
      temp_min: 1.09,
      temp_max: 1.09,
      pressure: 1009.15,
      sea_level: 1040.46,
      grnd_level: 1009.15,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.66, deg: 254.509 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-23 18:00:00'
  },
  {
    dt: 1529787600,
    main: {
      temp: 0.69,
      temp_min: 0.69,
      temp_max: 0.69,
      pressure: 1010.03,
      sea_level: 1041.34,
      grnd_level: 1010.03,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.56, deg: 259.511 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-23 21:00:00'
  },
  {
    dt: 1529798400,
    main: {
      temp: 8.39,
      temp_min: 8.39,
      temp_max: 8.39,
      pressure: 1011.17,
      sea_level: 1042.05,
      grnd_level: 1011.17,
      humidity: 86,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.56, deg: 239.004 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-24 00:00:00'
  },
  {
    dt: 1529809200,
    main: {
      temp: 12.36,
      temp_min: 12.36,
      temp_max: 12.36,
      pressure: 1009.42,
      sea_level: 1040.07,
      grnd_level: 1009.42,
      humidity: 73,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
    ],
    clouds: { all: 0 },
    wind: { speed: 2.01, deg: 208.505 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-24 03:00:00'
  },
  {
    dt: 1529820000,
    main: {
      temp: 11.23,
      temp_min: 11.23,
      temp_max: 11.23,
      pressure: 1008.94,
      sea_level: 1039.51,
      grnd_level: 1008.94,
      humidity: 76,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.46, deg: 198.503 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-24 06:00:00'
  },
  {
    dt: 1529830800,
    main: {
      temp: 5,
      temp_min: 5,
      temp_max: 5,
      pressure: 1010.27,
      sea_level: 1041.14,
      grnd_level: 1010.27,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.37, deg: 190.502 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-24 09:00:00'
  },
  {
    dt: 1529841600,
    main: {
      temp: 2.37,
      temp_min: 2.37,
      temp_max: 2.37,
      pressure: 1011.32,
      sea_level: 1042.34,
      grnd_level: 1011.32,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.22, deg: 241.501 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-24 12:00:00'
  },
  {
    dt: 1529852400,
    main: {
      temp: 0.5,
      temp_min: 0.5,
      temp_max: 0.5,
      pressure: 1011.34,
      sea_level: 1042.52,
      grnd_level: 1011.34,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.36, deg: 261.5 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-24 15:00:00'
  },
  {
    dt: 1529863200,
    main: {
      temp: -0.85,
      temp_min: -0.85,
      temp_max: -0.85,
      pressure: 1011.51,
      sea_level: 1042.93,
      grnd_level: 1011.51,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.51, deg: 257.001 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-24 18:00:00'
  },
  {
    dt: 1529874000,
    main: {
      temp: -1.71,
      temp_min: -1.71,
      temp_max: -1.71,
      pressure: 1012.74,
      sea_level: 1044.27,
      grnd_level: 1012.74,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.41, deg: 257.001 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-24 21:00:00'
  },
  {
    dt: 1529884800,
    main: {
      temp: 6.47,
      temp_min: 6.47,
      temp_max: 6.47,
      pressure: 1013.26,
      sea_level: 1044.44,
      grnd_level: 1013.26,
      humidity: 87,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.6, deg: 249.004 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-25 00:00:00'
  },
  {
    dt: 1529895600,
    main: {
      temp: 12.51,
      temp_min: 12.51,
      temp_max: 12.51,
      pressure: 1011.29,
      sea_level: 1041.98,
      grnd_level: 1011.29,
      humidity: 74,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.35, deg: 238.503 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-25 03:00:00'
  },
  {
    dt: 1529906400,
    main: {
      temp: 11.29,
      temp_min: 11.29,
      temp_max: 11.29,
      pressure: 1010.95,
      sea_level: 1041.5,
      grnd_level: 1010.95,
      humidity: 84,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
    ],
    clouds: { all: 0 },
    wind: { speed: 0.98, deg: 152.503 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-25 06:00:00'
  },
  {
    dt: 1529917200,
    main: {
      temp: 4.38,
      temp_min: 4.38,
      temp_max: 4.38,
      pressure: 1011.88,
      sea_level: 1042.88,
      grnd_level: 1011.88,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 0.97, deg: 115.002 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-25 09:00:00'
  },
  {
    dt: 1529928000,
    main: {
      temp: 1.66,
      temp_min: 1.66,
      temp_max: 1.66,
      pressure: 1012.96,
      sea_level: 1044.09,
      grnd_level: 1012.96,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 0.77, deg: 90.5061 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-25 12:00:00'
  },
  {
    dt: 1529938800,
    main: {
      temp: 0.36,
      temp_min: 0.36,
      temp_max: 0.36,
      pressure: 1013.15,
      sea_level: 1044.35,
      grnd_level: 1013.15,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.16, deg: 259.502 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-25 15:00:00'
  },
  {
    dt: 1529949600,
    main: {
      temp: -0.39,
      temp_min: -0.39,
      temp_max: -0.39,
      pressure: 1012.92,
      sea_level: 1044.29,
      grnd_level: 1012.92,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.55, deg: 232 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-25 18:00:00'
  },
  {
    dt: 1529960400,
    main: {
      temp: -1.31,
      temp_min: -1.31,
      temp_max: -1.31,
      pressure: 1013.73,
      sea_level: 1045.26,
      grnd_level: 1013.73,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.51, deg: 235.001 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-25 21:00:00'
  },
  {
    dt: 1529971200,
    main: {
      temp: 7.71,
      temp_min: 7.71,
      temp_max: 7.71,
      pressure: 1014.32,
      sea_level: 1045.42,
      grnd_level: 1014.32,
      humidity: 91,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.56, deg: 214.004 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-26 00:00:00'
  },
  {
    dt: 1529982000,
    main: {
      temp: 12.29,
      temp_min: 12.29,
      temp_max: 12.29,
      pressure: 1013.04,
      sea_level: 1043.73,
      grnd_level: 1013.04,
      humidity: 77,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
    ],
    clouds: { all: 44 },
    wind: { speed: 0.97, deg: 123.001 },
    rain: { '3h': 0.01 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-26 03:00:00'
  },
  {
    dt: 1529992800,
    main: {
      temp: 10.82,
      temp_min: 10.82,
      temp_max: 10.82,
      pressure: 1012.7,
      sea_level: 1043.29,
      grnd_level: 1012.7,
      humidity: 88,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
    ],
    clouds: { all: 44 },
    wind: { speed: 0.76, deg: 68.0002 },
    rain: { '3h': 0.01 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-26 06:00:00'
  },
  {
    dt: 1530003600,
    main: {
      temp: 6.15,
      temp_min: 6.15,
      temp_max: 6.15,
      pressure: 1013.14,
      sea_level: 1044,
      grnd_level: 1013.14,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10n' }
    ],
    clouds: { all: 36 },
    wind: { speed: 0.97, deg: 95.501 },
    rain: { '3h': 0.02 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-26 09:00:00'
  },
  {
    dt: 1530014400,
    main: {
      temp: 3.82,
      temp_min: 3.82,
      temp_max: 3.82,
      pressure: 1013.65,
      sea_level: 1044.46,
      grnd_level: 1013.65,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10n' }
    ],
    clouds: { all: 44 },
    wind: { speed: 0.27, deg: 331.5 },
    rain: { '3h': 0.16 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-26 12:00:00'
  },
  {
    dt: 1530025200,
    main: {
      temp: 4.47,
      temp_min: 4.47,
      temp_max: 4.47,
      pressure: 1013.47,
      sea_level: 1044.45,
      grnd_level: 1013.47,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10n' }
    ],
    clouds: { all: 100 },
    wind: { speed: 0.75, deg: 308.501 },
    rain: { '3h': 0.78 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-26 15:00:00'
  },
  {
    dt: 1530036000,
    main: {
      temp: 5.03,
      temp_min: 5.03,
      temp_max: 5.03,
      pressure: 1012.55,
      sea_level: 1043.57,
      grnd_level: 1012.55,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10n' }
    ],
    clouds: { all: 92 },
    wind: { speed: 0.69, deg: 153.504 },
    rain: { '3h': 0.74 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-26 18:00:00'
  },
  {
    dt: 1530046800,
    main: {
      temp: 4.77,
      temp_min: 4.77,
      temp_max: 4.77,
      pressure: 1012.31,
      sea_level: 1043.41,
      grnd_level: 1012.31,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10n' }
    ],
    clouds: { all: 88 },
    wind: { speed: 0.99, deg: 155.005 },
    rain: { '3h': 0.31 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-26 21:00:00'
  },
  {
    dt: 1530057600,
    main: {
      temp: 8.4,
      temp_min: 8.4,
      temp_max: 8.4,
      pressure: 1012.68,
      sea_level: 1043.5,
      grnd_level: 1012.68,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
    ],
    clouds: { all: 92 },
    wind: { speed: 1.37, deg: 188.002 },
    rain: { '3h': 0.43 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-27 00:00:00'
  },
  {
    dt: 1530068400,
    main: {
      temp: 9.91,
      temp_min: 9.91,
      temp_max: 9.91,
      pressure: 1010.35,
      sea_level: 1041.06,
      grnd_level: 1010.35,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
    ],
    clouds: { all: 92 },
    wind: { speed: 1.56, deg: 159 },
    rain: { '3h': 1.02 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-27 03:00:00'
  },
  {
    dt: 1530079200,
    main: {
      temp: 9.74,
      temp_min: 9.74,
      temp_max: 9.74,
      pressure: 1008.99,
      sea_level: 1039.79,
      grnd_level: 1008.99,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' }
    ],
    clouds: { all: 92 },
    wind: { speed: 1.51, deg: 144.5 },
    rain: { '3h': 3.49 },
    sys: { pod: 'd' },
    dt_txt: '2018-06-27 06:00:00'
  },
  {
    dt: 1530090000,
    main: {
      temp: 9.37,
      temp_min: 9.37,
      temp_max: 9.37,
      pressure: 1008.94,
      sea_level: 1039.8,
      grnd_level: 1008.94,
      humidity: 100,
      temp_kf: 0
    },
    weather: [
      { id: 501, main: 'Rain', description: 'moderate rain', icon: '10n' }
    ],
    clouds: { all: 92 },
    wind: { speed: 1.86, deg: 156 },
    rain: { '3h': 5.63 },
    sys: { pod: 'n' },
    dt_txt: '2018-06-27 09:00:00'
  }
],
city: {
  id: 2142301,
  name: 'Yerrinbool Fake',
  coord: { lat: -34.3667, lon: 150.55 },
  country: 'AU'
}
};
