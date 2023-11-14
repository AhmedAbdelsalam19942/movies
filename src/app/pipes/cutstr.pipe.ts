import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutstr',
})
export class CutstrPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let str = value.slice(0, 50);
    return str;
  }
}
