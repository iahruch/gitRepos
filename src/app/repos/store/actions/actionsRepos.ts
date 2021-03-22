import { createAction, props } from '@ngrx/store'
import { ActionReposTypes as ActionTypes } from '../actionTypes'
import { ResponseReposInterface } from '../../types/responseRepos.interface'

export const getReposAction = createAction(
  ActionTypes.GET_REPOS,
  props<{ page: number }>()
)
export const getReposSuccessAction = createAction(
  ActionTypes.GET_REPOS_SUCCESS,
  props<{ repos: ResponseReposInterface }>()
)

export const getReposFailureAction = createAction(
  ActionTypes.GET_REPOS_FAILURE,
  props<{ errors: any }>()
)
