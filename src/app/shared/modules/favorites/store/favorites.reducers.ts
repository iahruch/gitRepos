import { Action, createReducer, on } from '@ngrx/store'
import {
  addToFavoritesSuccessAction,
  removeToFavoritesSuccessAction,
} from './actions'
import { FavoritesStateInterface } from '../types/favoritesState.interface'

const initialState: FavoritesStateInterface = {
  items: {},
}

const addToFavoritesReducer = createReducer(
  initialState,
  on(addToFavoritesSuccessAction, (state, action) => ({
    items: action.favorites,
  })),

  on(removeToFavoritesSuccessAction, (state, action) => ({
    items: action.favorites,
  }))
)

export function reducer(state: FavoritesStateInterface, action: Action) {
  return addToFavoritesReducer(state, action)
}
