import {
  AfterViewInit,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core'
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling'
import { filter, map, pairwise, throttleTime } from 'rxjs/operators'
import { select, Store } from '@ngrx/store'

import { SearchService } from '../../services/search.service'
import { Observable } from 'rxjs'
import {
  errorsSelector,
  isLoadingSelector,
  searchSelector,
  strSearchSelector,
} from '../../store/selectors'
import { startSearchReposAction } from '../../store/actions/actionsSearch'
import { UtilsServices } from '../../services/utils.services'

@Component({
  selector: 'r-search',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.scss'],
})
export class SearchReposComponent implements OnInit, AfterViewInit {
  isLoading$: Observable<boolean>
  search$: Observable<any[]>
  errors$: Observable<any>

  page: number = 2
  strSearch: string = ''
  @ViewChild('scroller') scroller: CdkVirtualScrollViewport

  constructor(
    private store: Store,
    private searchService: SearchService,
    private ngZone: NgZone,
    private utilsService: UtilsServices
  ) {}

  ngOnInit(): void {
    this.store.pipe(select(strSearchSelector)).subscribe((str) => {
      this.strSearch = str
    })
    this.initValues()
  }
  initValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.search$ = this.store.pipe(select(searchSelector))
    this.errors$ = this.store.pipe(select(errorsSelector))
  }

  ngAfterViewInit(): void {
    this.scroller
      .elementScrolled()
      .pipe(
        map(() => this.scroller.measureScrollOffset('bottom')),
        pairwise(),
        filter(([y1, y2]) => y2 < y1 && y2 < 144),
        throttleTime(300)
      )
      .subscribe(() => {
        this.ngZone.run(() => {
          this.store.dispatch(
            startSearchReposAction({ page: ++this.page, str: this.strSearch })
          )
        })
      })
  }
}
