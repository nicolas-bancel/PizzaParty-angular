import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tva'
})
export class TvaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // let tax = args[0] || "1.2";
    // return Math.round(value *= tax);

    // let tax = args[0] || "20";
    // return Math.round(value * (1 + tax / 100));

    let tax = args[0] || "20";
    let result = value * (1 + tax / 100);
    return result.toFixed(2).replace('.', '€');

  }

}
