import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebab'
})
export class KebabPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const loweredWords = value.split(' ').map(word => word.toLocaleLowerCase())
    return loweredWords.join('-');
  }

}
