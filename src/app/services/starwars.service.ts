import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StarwarsResponse } from '../types/StarwarsResponse';

@Injectable()
export class StarwarsService {
  constructor(private http: HttpClient) {

  }

  getHeros(): Observable<any> {
    console.log(Observable);
    console.log('Getting heroes');

    /* Observable.of(this.http.get<StarwarsResponse>('https://swapi.co/api/people/'))
      .subscribe(data => { console.log(data); }); */

    return this.http.get<Observable<any>>('https://swapi.co/api/people/');
  }
}
