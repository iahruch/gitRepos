import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class UtilsServices {
  private searchStr$ = new Subject()

  setStr(str: string) {
    this.searchStr$.next(str)
  }

  getStr() {
    return this.searchStr$.asObservable()
  }
}
