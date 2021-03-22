import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'
import { ReposEffect } from './store/repos.effect'
import { StoreModule } from '@ngrx/store'
import { reducer } from './store/reducers'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReposComponent } from './components/repos.component'
import { ReposService } from './services/repos.service'
import { MaterialModule } from '../material.module'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FavoritesModule } from '../shared/modules/favorites/favorites.module'

const routers = [{ path: '', component: ReposComponent }]

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MaterialModule,
    RouterModule.forChild(routers),
    StoreModule.forFeature('repos', reducer),
    EffectsModule.forFeature([ReposEffect]),
    FavoritesModule,
  ],
  exports: [],
  declarations: [ReposComponent],
  providers: [ReposService],
})
export class ReposModule {}
