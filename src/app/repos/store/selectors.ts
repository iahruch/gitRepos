import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ReposStateInterface } from '../types/reposState.interface'
import { AppStateInterface } from './../../shared/types/appState.interface'

export const reposFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ReposStateInterface
>('repos')

export const isLoadingSelector = createSelector(
  reposFeatureSelector,
  (state: ReposStateInterface) => state.loading
)
export const reposSelector = createSelector(
  reposFeatureSelector,
  (state: ReposStateInterface) => state.items
)
export const errorsSelector = createSelector(
  reposFeatureSelector,
  (state: ReposStateInterface) => state.errors
)

export const searchSelector = createSelector(
  reposFeatureSelector,
  (state: ReposStateInterface) => state.searchItems
)

export const strSearchSelector = createSelector(
  reposFeatureSelector,
  (state: ReposStateInterface) => state.strSearch
)
