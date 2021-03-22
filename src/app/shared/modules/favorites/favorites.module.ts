import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { PersistFavoritesServices } from './services/persistFavorites.services'
import { AddToFavoritesEffect } from './store/effects/addToFavorites.effect'
import { reducer } from './store/favorites.reducers'
import { FavoritesComponent } from './components/favorites/favorites.component'
import { RouterModule } from '@angular/router'
import { AddToFavoritesComponent } from './components/addToFavorites/addToFavorites.component'
import { MaterialModule } from '../../../material.module'
import { ShortNickPipe } from './services/shortNick.pipe'

const routes = [{ path: 'favorites', component: FavoritesComponent }]

@NgModule({
  declarations: [AddToFavoritesComponent, FavoritesComponent, ShortNickPipe],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('favorites', reducer),
    EffectsModule.forFeature([AddToFavoritesEffect]),
    RouterModule.forChild(routes),
  ],
  exports: [AddToFavoritesComponent],
  providers: [PersistFavoritesServices],
})
export class FavoritesModule {}
