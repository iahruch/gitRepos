import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators'
import {
  getSearchReposFailureActon,
  getSearchReposSuccessAction,
  startSearchReposAction,
} from '../actions/actionsSearch'
import { SearchService } from '../../services/search.service'
import { Router } from '@angular/router'
import { UtilsServices } from '../../services/utils.services'

@Injectable()
export class SearchEffect {
  searchEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startSearchReposAction),
      switchMap(({ page, str }) => {
        return this.searchService.search(page, str).pipe(
          delay(300),
          map((search) => {
            return getSearchReposSuccessAction({ search, str })
          }),
          catchError((errors) => {
            return of(getSearchReposFailureActon({ errors }))
          })
        )
      })
    )
  )

  afterStartSearchEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(startSearchReposAction),
        tap(({ page, str }) => {
          this.router.navigate(['/search'])
          this.utilsService.setStr(str)
        })
      ),
    {
      dispatch: false,
    }
  )

  constructor(
    private actions$: Actions,
    private searchService: SearchService,
    private utilsService: UtilsServices,
    private router: Router
  ) {}
}
