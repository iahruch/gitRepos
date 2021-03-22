import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { PersistFavoritesServices } from '../../services/persistFavorites.services'
import { addToFavoritesAction, addToFavoritesSuccessAction } from '../actions'
import { switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { getReposSuccessAction } from '../../../../../repos/store/actionsRepos'

@Injectable()
export class AddToFavoritesEffect {
  addToFavorites$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addToFavoritesAction),
        switchMap(({ fav }) => {
          let allFavorites = this.persistFavServices.get() || {}
          let idElem = Object.keys(fav).join()

          if (allFavorites[idElem]) {
            delete allFavorites[idElem]
          } else {
            allFavorites = { ...allFavorites, ...fav }
          }

          this.persistFavServices.set(allFavorites)
          return of(
            addToFavoritesSuccessAction({ favorites: { ...allFavorites } })
          )
        }) //end switch
      ) //endactions$
  ) //end

  checkBeforeLoadingAlbums$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getReposSuccessAction),
      switchMap(() => {
        let allFavs = this.persistFavServices.get() || []
        return of(addToFavoritesSuccessAction({ favorites: allFavs }))
      })
    )
  })

  constructor(
    private actions$: Actions,
    private persistFavServices: PersistFavoritesServices
  ) {}
}
