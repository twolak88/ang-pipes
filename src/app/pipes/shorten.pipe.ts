import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    const val: string = value;
    if (val.length > 10) {
      return val.substr(0, 10) + '...';
    }
    return value;
  }
}
