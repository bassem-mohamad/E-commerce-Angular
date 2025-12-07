import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardPipe',
})
export class CardPipePipe implements PipeTransform {

transform(value: number): string {

  let strValue = value.toString()
    let groups = strValue.match(/.{1,4}/g);

    return groups ? groups.join('-') : strValue;
}}
