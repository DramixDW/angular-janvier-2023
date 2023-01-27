import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    console.log(args);
    let max = args[0];
    if (!max) {
      max = 10;
    }
    return  value.slice(0, max) + '...';
  }

}
