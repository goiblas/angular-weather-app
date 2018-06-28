import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rain'
})
export class RainPipe implements PipeTransform {

  transform(value: string | number, args?: any): string {
    // no tengo claro cómo deberia mostrar las precipitaciones de los datos que recibo de API
    // divido la cantidad entre 3 para obtener la información por hora
    return (Number(value) / 3).toFixed(3) || '0.000';
  }
}
