import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scale'
})
export class ScalePipe implements PipeTransform {

  transform(value: number, factor: number = 1): number {
    return value * factor;
  }

}
