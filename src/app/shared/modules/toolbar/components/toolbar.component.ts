import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getFavoritesSelector } from '../../favorites/store/selectors'

@Component({
  selector: 'r-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  count: number
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.pipe(select(getFavoritesSelector)).subscribe((favs) => {
      this.count = Object.keys(favs).length
      console.log('Toolbar', this.count)
    })
  }
}
