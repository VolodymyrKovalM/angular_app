import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {
  userOne: object;
  userTwo: object;
  constructor(private http: HttpClient) {
    this.userOne = {
      data: null,
      repos: null,
      name: null,
      error: null,
      isFetching: false,
    }

    this.userTwo = {
      data: null,
      repos: null,
      name: null,
      error: null,
      isFetching: false,
    }
  }
}
