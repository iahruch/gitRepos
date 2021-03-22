import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  NgZone,
} from '@angular/core'
import { ReposService } from '../services/repos.service'
import { select, Store } from '@ngrx/store'
import { getReposAction } from '../store/actionsRepos'
import { Observable } from 'rxjs'
import { RepoInterface } from '../types/repo.interface'
import {
  errorsSelector,
  isLoadingSelector,
  reposSelector,
} from '../store/selectors'
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling'
import { filter, map, pairwise, throttleTime } from 'rxjs/operators'

@Component({
  selector: 'r-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit, AfterViewInit {
  isLoading$: Observable<boolean>
  repos$: Observable<RepoInterface[]>
  errors$: Observable<any>
  displayedColumns: string[] = ['position', 'repo', 'starts', 'fav']

  @ViewChild('scroller') scroller: CdkVirtualScrollViewport

  constructor(
    private store: Store,
    private reposService: ReposService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getReposAction({ page: 1 }))
    this.initValues()
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
          this.store.dispatch(getReposAction({ page: 2 }))
        })
      })
  }

  initValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.repos$ = this.store.pipe(select(reposSelector))
    this.errors$ = this.store.pipe(select(errorsSelector))
  }
}
