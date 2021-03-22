import { Component, Input } from '@angular/core'

@Component({
  selector: 'r-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
})
export class RepoListComponent {
  @Input('repos') repos: any
  displayedColumns: string[] = ['position', 'repo', 'starts', 'fav']

  constructor() {}

  ngOnInit(): void {
    console.log('RepoListComponent', this.repos)
  }
}
