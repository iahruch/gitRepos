import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getFavoritesSelector } from '../../store/selectors'
import { addToFavoritesAction } from '../../store/actions'

@Component({
  selector: 'r-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  constructor(private store: Store) {}
  favItems: any

  ngOnInit(): void {
    this.store.pipe(select(getFavoritesSelector)).subscribe((favItems) => {
      console.log(Object.entries(favItems))
      this.favItems = Object.entries(favItems)
    })
  }

  removeFroFavorites(favElement: any) {
    // const data = {
    //   fullName: this.fullNameProps,
    //   ownerPhoto: this.ownerPhotoProps,
    //   starsCount: this.starsCountProps,
    //   descRepo: this.descRepoProps,
    // }
    // const fav = {
    //   [this.idProps]: data,
    // }
    //
    // this.store.dispatch(addToFavoritesAction({ fav }))
  }
}
