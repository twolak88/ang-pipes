import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): unknown {
    if (value.length > 1) {
      return value.split('').reverse().join('');
    }
    return value;
  }

}
