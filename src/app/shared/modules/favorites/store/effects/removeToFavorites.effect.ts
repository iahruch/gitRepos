import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { PersistFavoritesServices } from '../../services/persistFavorites.services'
import { removeToFavoritesAction } from '../actions'
import { switchMap } from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable()
export class RemoveToFavoritesEffect {
  removeToFavorites$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(removeToFavoritesAction),
        switchMap(({ fav }) => {
          let allFavorites = this.persistFavServices.get() || {}
          let idElem = Object.keys(fav).join()

          console.log('idElem', idElem)

          if (allFavorites[idElem]) {
            console.log(typeof idElem)
            delete allFavorites[idElem]
          }
          console.log('sum', allFavorites)

          this.persistFavServices.set(allFavorites)
          return of(removeToFavoritesAction({ favorites: { ...allFavorites } }))
        }) //end switch
      ) //endactions$
  ) //end

  constructor(
    private actions$: Actions,
    private persistFavServices: PersistFavoritesServices
  ) {}
}
