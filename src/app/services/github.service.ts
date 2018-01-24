import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {
  users: object;
  constructor(private http: HttpClient) {
    this.users = {
      userOne: {
        data: null,
        repos: null,
        name: null,
        error: null,
        isFetching: false,
      },
      userTwo: {
        data: null,
        repos: null,
        name: null,
        error: null,
        isFetching: false,
      },
    };
  }

  fetchUser(userNumber) {
    if (!this.users[userNumber].name) {
      alert('Please enter the user name!');
    } else {
      this.users[userNumber].isFetching = true;
      const url = `https://api.github.com/users/${this.users[userNumber].name}`;
      this.http.get<Observable<any>>(url).subscribe(response => {
        this.users[userNumber].data = response;
        this.users[userNumber].isFetching = false;
      });
    }
  }

  resetUser(userNumber) {
    this.users[userNumber].data = null;
    this.users[userNumber].name = null;
  }

  getUserByName(name) {
    for (let user in this.users) {
      if (this.users[user].data && this.users[user].data.login === name) {
        return this.users[user];
      }
    }

    return false;
  }
}
