import { Injectable } from '@angular/core'

@Injectable()
export class PersistFavoritesServices {
  constructor() {}

  get() {
    try {
      return JSON.parse(localStorage.getItem('favorites'))
    } catch (err) {
      console.error('Error retrieve data from local storage', err.message)
    }
  }

  set(data): void {
    try {
      localStorage.setItem('favorites', JSON.stringify(data))
    } catch (err) {
      console.error('Error saving to local storage', err.message)
    }
  }
}
