import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //performance!!!
})
export class FilterPipe implements PipeTransform {

  transform(value: unknown, filterString: string, propName: string): unknown {
    if((<[]>value).length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of <[]>value) {
      if (propName === 'all') {
        for (let key of Object.keys(item)) {
          let prop = item[key];
          if (typeof prop === "string" && (<string>prop).startsWith(filterString)
            && !resultArray.includes(item)) {
            resultArray.push(item);
          }
        }
      } else {
        if((<string>item[propName]).startsWith(filterString)) {
          resultArray.push(item);
        }
      }
    }
    return resultArray;
  }
}
