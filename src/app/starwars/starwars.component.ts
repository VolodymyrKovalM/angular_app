import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss']
})
export class StarwarsComponent implements OnInit {

  constructor(
    private swService: StarwarsService
  ) {}

  ngOnInit() {
    if (!this.swService.pagesData) {
      this.swService.fetchPageData('https://swapi.co/api/people/');
    }
  }

  onPrevButtonClick() {
    this.swService.prev();
  }

  onNextButtonClick() {
    this.swService.next();
  }
}
