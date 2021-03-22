import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { ReposService } from '../services/repos.service'
import {
  getReposAction,
  getReposFailureAction,
  getReposSuccessAction,
} from './actionsRepos'

import { ResponseReposInterface } from '../types/responseRepos.interface'
import { of } from 'rxjs'
import { catchError, delay, map, switchMap } from 'rxjs/operators'

@Injectable()
export class ReposEffect {
  reposEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getReposAction),
      switchMap(({ page }) => {
        return this.reposService.getRepos(page).pipe(
          delay(200),
          map((repos: ResponseReposInterface) => {
            console.log('Effect repos', repos)
            return getReposSuccessAction({ repos })
          }),
          catchError((errors) => {
            return of(getReposFailureAction({ errors }))
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private reposService: ReposService) {}
}
