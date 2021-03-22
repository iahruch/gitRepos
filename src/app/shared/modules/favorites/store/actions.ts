import { createAction, props } from '@ngrx/store'
import { ActionTypes } from './actionTypes'
import { FavoriteInterface } from '../types/favorite.interface'
import { FavoritesStateInterface } from '../types/favoritesState.interface'

export const addToFavoritesAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{ fav: FavoriteInterface }>()
)
export const addToFavoritesSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{ favorites: FavoriteInterface }>()
)
export const addToFavoritesFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE
)
