import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'
import { ReposEffect } from './store/effects/repos.effect'
import { StoreModule } from '@ngrx/store'
import { reducer } from './store/reducers'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReposComponent } from './components/repos/repos.component'
import { ReposService } from './services/repos.service'
import { MaterialModule } from '../material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FavoritesModule } from '../shared/modules/favorites/favorites.module'
import { MoreInfoToolTipDirective } from '../shared/services/moreInfoToolTip.directive'
import { RepoListComponent } from './components/list/repo-list.component'
import { SearchReposComponent } from './components/search-repos/search-repos.component'
import { WrapperComponent } from './components/wrapper/wrapper.component'
import { SearchService } from './services/search.service'
import { SearchEffect } from './store/effects/search.effect'
import { UtilsServices } from './services/utils.services'

const routers = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      { path: '', component: ReposComponent },
      { path: 'search', component: SearchReposComponent },
    ],
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MaterialModule,
    RouterModule.forChild(routers),
    StoreModule.forFeature('repos', reducer),
    EffectsModule.forFeature([ReposEffect, SearchEffect]),
    FavoritesModule,
  ],
  exports: [],
  declarations: [
    ReposComponent,
    MoreInfoToolTipDirective,
    RepoListComponent,
    SearchReposComponent,
    WrapperComponent,
  ],
  providers: [ReposService, SearchService, UtilsServices],
})
export class ReposModule {}
