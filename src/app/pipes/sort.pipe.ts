import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false //performance!!!
})
export class SortPipe implements PipeTransform {

  transform(value: unknown, sortBy: string): unknown {
    if((<[]>value).length <= 1 || sortBy === '') {
      return value;
    }
    if(sortBy === 'started') {
      return (<[]>value).sort(
        (a, b) => {
          return (<Date> a[sortBy]).getTime() - (<Date> b[sortBy]).getTime();
        }
      );
    }
    return (<[]>value).sort(
      (a, b) => {
        return (<string> a[sortBy]).localeCompare(<string> b[sortBy]);
      }
    );
  }
}
