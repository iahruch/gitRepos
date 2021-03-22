import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getFavoritesSelector } from '../../store/selectors'
import { removeToFavoritesAction } from '../../store/actions'

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
    console.log('FavoritesComponent', favElement)
    const fav = {
      [favElement[0]]: favElement[1],
    }
    this.store.dispatch(removeToFavoritesAction({ fav }))
  }
}
