import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../model/repository';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  url = 'https://github-trending-api.now.sh';

  constructor(private http: HttpClient) {
  }
  getTrendingRepos(): Observable<Repository> {
    return this.http.get<Repository>(`${this.url}/repositories?language=&since=daily`);
  }
}
