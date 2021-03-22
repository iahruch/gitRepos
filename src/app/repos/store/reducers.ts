import { ReposStateInterface } from '../types/reposState.interface'
import { Action, createReducer, on } from '@ngrx/store'
import {
  getReposAction,
  getReposFailureAction,
  getReposSuccessAction,
} from './actionsRepos'

const initialState: ReposStateInterface = {
  loading: false,
  errors: null,
  items: [],
}
const reposReducer = createReducer(
  initialState,
  on(getReposAction, (state) => ({
    ...state,
    loading: true,
    errors: null,
  })),

  on(getReposSuccessAction, (state, action) => ({
    ...state,
    loading: false,
    items: [...state.items, ...action.repos.items],
  })),

  on(getReposFailureAction, (state, action) => ({
    ...state,
    errors: action.errors,
  }))
)

export function reducer(state: ReposStateInterface, action: Action) {
  return reposReducer(state, action)
}
