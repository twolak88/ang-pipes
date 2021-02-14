import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, limit:number, cutOffText: string) {
    const val: string = value;
    if (val.length > limit) {
      return val.substr(0, limit) + cutOffText;
    }
    return value;
  }
}
