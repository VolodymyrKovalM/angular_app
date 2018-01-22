import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { StarwarsResponse } from '../types/StarwarsResponse';
import images from './mock-images';

@Injectable()
export class StarwarsService {
  isFetching: boolean;
  avatars: string[];
  pagesData: StarwarsResponse;
  currentIndex: number;
  currentPage: any[];
  films: any[];
  isFetchingFilms: boolean;

  constructor(private http: HttpClient) {
    this.isFetching = false;
    this.currentIndex = 0;
    this.avatars = images;
    this.isFetchingFilms = false;
    this.films = null;
    this.currentPage = null;
  }

  getHeros(url): Observable<any> {
    /* Observable.of(this.http.get<StarwarsResponse>('https://swapi.co/api/people/'))
      .subscribe(data => { console.log(data); }); */
    return this.http.get<Observable<any>>(url);
  }

  getFilms(urls): Observable<any> {
    const obs = urls.map(url => this.http.get<Observable<any>>(url));
    return forkJoin(obs);
  }

  fetchPageData(url) {
    this.isFetching = true;
    this.getHeros(url).subscribe(data => {
      this.isFetching = false;
      this.pagesData = data;
      this.currentPage = this.pagesData.results;

      this.fetchFilms(this.currentPage[this.currentIndex].films);
    });
  }

  fetchFilms(urls) {
    this.isFetchingFilms = true;
    this.getFilms(urls)
      .subscribe(results => {
        this.isFetchingFilms = false;
        this.films = results;
      });
  }

  prev() {
    if (this.currentIndex === 0 && this.pagesData.previous) {
      this.fetchPageData(this.pagesData.previous);
      this.currentIndex = this.currentPage.length - 1;
    } else {
      this.currentIndex -= 1;
      this.fetchFilms(this.currentPage[this.currentIndex].films);
    }
  }

  next() {
    if (this.currentIndex === this.currentPage.length - 1) {
      this.fetchPageData(this.pagesData.next);
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
      this.fetchFilms(this.currentPage[this.currentIndex].films);
    }
  }
}
