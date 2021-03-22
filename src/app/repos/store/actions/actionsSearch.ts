import { createAction, props } from '@ngrx/store'
import { ActionReposTypes as ActionTypes } from '../actionTypes'
import { ResponseReposInterface } from '../../types/responseRepos.interface'

export const startSearchReposAction = createAction(
  ActionTypes.SEARCH_REPOS,
  props<{ page: number; str: string }>()
)
export const getSearchReposSuccessAction = createAction(
  ActionTypes.SEARCH_REPOS_SUCCESS,
  props<{ search: ResponseReposInterface; str: string }>()
)

export const getSearchReposFailureActon = createAction(
  ActionTypes.SEARCH_REPOS_FAILURE,
  props<{ errors: any }>()
)
