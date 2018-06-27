import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getWeekday'
})
export class GetWeekdayPipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value).getDay();
    return this.getWeekDay(date);
  }

  getWeekDay(num: number): string {
    switch (num) {
      case 0:
        return 'Domingo';
      case 1:
        return 'Lunes';
      case 2:
        return 'Martes';
      case 3:
        return 'Miércoles';
      case 4:
        return 'Jueves';
      case 5:
        return 'Viernes';
      case 6:
        return 'Sábado';
    }
  }
}
