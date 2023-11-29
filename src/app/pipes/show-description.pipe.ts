import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showDescription'
})
export class ShowDescriptionPipe implements PipeTransform {

  transform(value: any, list: any[], codeColName: string, descColName: string): any {
    if (!list || !codeColName || !descColName) {
      return value;
    }
    const item = list.find(item => item[codeColName] == value);
    if (item) {
      return item[descColName];
    }
    return value;
  }

}
