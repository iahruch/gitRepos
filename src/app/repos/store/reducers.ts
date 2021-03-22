import { ReposStateInterface } from '../types/reposState.interface'
import { Action, createReducer, on } from '@ngrx/store'
import {
  getReposAction,
  getReposFailureAction,
  getReposSuccessAction,
} from './actions/actionsRepos'
import {
  getSearchReposFailureActon,
  getSearchReposSuccessAction,
  startSearchReposAction,
} from './actions/actionsSearch'
import { routerNavigationAction } from '@ngrx/router-store'

const initialState: ReposStateInterface = {
  loading: false,
  errors: null,
  items: [],
  strSearch: '',
  searchItems: [],
}
const reducers = createReducer(
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
  })),

  on(startSearchReposAction, (state) => ({
    ...state,
    loading: true,
    errors: null,
  })),

  on(getSearchReposSuccessAction, (state, action) => ({
    ...state,
    loading: false,
    strSearch: action.str,
    searchItems: [...state.searchItems, ...action.search.items],
  })),

  on(getSearchReposFailureActon, (state, action) => ({
    ...state,
    errors: action.errors,
  })),

  on(routerNavigationAction, (state) => ({
    ...state,
    loading: false,
    errors: null,
    items: [],
    searchItems: [],
  }))
)

export function reducer(state: ReposStateInterface, action: Action) {
  return reducers(state, action)
}
