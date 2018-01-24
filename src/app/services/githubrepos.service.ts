import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GithubService } from './github.service';
import { Router } from '@angular/router';

@Injectable()
export class GithubReposService {
  repos: object;
  isFetching: boolean;
  userData: object;
  constructor(
    private http: HttpClient,
    private gitService: GithubService,
    private router: Router
  ) {
    this.userData = null;
    this.repos = null;
    this.isFetching = false;
  }

  fetchRepos(userName) {
    this.isFetching = true;
    const userData = this.gitService.getUserByName(userName);
    if (!userData) {
      this.router.navigate(['/github']);
    } else {
      this.userData = userData.data;
      this.http.get<Observable<any>>(this.userData.repos_url)
        .subscribe(response => {
          this.repos = response;
          this.isFetching = false;
        });
    }
  }
}
