import { Component, Input, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { addToFavoritesAction } from '../../store/actions'
import { getFavoritesSelector } from '../../store/selectors'

@Component({
  selector: 'r-add-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input('id') idProps: number
  @Input('fullName') fullNameProps: string
  @Input('ownerPhoto') ownerPhotoProps: string
  @Input('starsCount') starsCountProps: number
  @Input('descRepo') descRepoProps: string

  isFavorites: boolean = false
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.pipe(select(getFavoritesSelector)).subscribe((favorites) => {
      this.isFavorites = Object.keys(favorites).includes(String(this.idProps))
    })
  }

  addFavorites() {
    const data = {
      fullName: this.fullNameProps,
      ownerPhoto: this.ownerPhotoProps,
      starsCount: this.starsCountProps,
      descRepo: this.descRepoProps,
    }
    const fav = {
      [this.idProps]: data,
    }

    this.store.dispatch(addToFavoritesAction({ fav }))
  }
}
