import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { SearchService } from '../../services/search.service'
import { startSearchReposAction } from '../../store/actions/actionsSearch'
import { ActivatedRoute, Router } from '@angular/router'
import { UtilsServices } from '../../services/utils.services'

@Component({
  selector: 'r-search',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  form: FormGroup
  page: number = 1

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private utilsService: UtilsServices
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: ['', [Validators.minLength(3)]],
    })
  }

  search(): void {
    this.store.dispatch(
      startSearchReposAction({
        page: this.page,
        str: this.form.get('search').value,
      })
    )
    // this.router.navigate(['/search'])
    this.form.reset()
  }
}
