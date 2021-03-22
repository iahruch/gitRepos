import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { ResponseReposInterface } from '../types/responseRepos.interface'
import { environment } from '../../../environments/environment'
import { catchError } from 'rxjs/operators'

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  search(page, searchStr): Observable<ResponseReposInterface> {
    let params = new HttpParams()
      .set('q', `in:name ${searchStr}`)
      .set('order', 'desc')
      .set('per_page', environment.perPage)
      .set('page', page)

    return this.http
      .get<ResponseReposInterface>(
        `${environment.baseUrl}/search/repositories?`,
        { params }
      )
      .pipe(catchError((err) => throwError(err)))
  }
}
