import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {

  romanNumerals: Array<string> = ['I','II','III','IV','V','VI','VII']

  transform(value: any, args?: any): string {
    return this.romanNumerals[value - 1];
  }

}
