import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'shortNick',
})
export class ShortNickPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    console.log(value)
    return String(value).split('/')[0]
  }
}
