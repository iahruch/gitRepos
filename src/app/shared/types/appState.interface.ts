import { ReposStateInterface } from '../../repos/types/reposState.interface'
import { FavoritesStateInterface } from '../modules/favorites/types/favoritesState.interface'

export interface AppStateInterface {
  repos: ReposStateInterface
  favorites: FavoritesStateInterface
}
