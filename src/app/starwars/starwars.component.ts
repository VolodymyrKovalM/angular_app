import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';
import images from './mock-images';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {
  isFetching: boolean;
  avatars: string[];
  pagesData: Object;
  currentIndex: number;
  herosInCurrentPage: any[];

  constructor(
    private starwarsService: StarwarsService
  ) {
    this.isFetching = true;
    this.currentIndex = 0;
    this.avatars = images;
  }

  ngOnInit() {
    this.getHeros();
  }

  getHeros() {
    this.starwarsService.getHeros().subscribe(data => {
      this.isFetching = false;
      this.pagesData = data;
      this.herosInCurrentPage = this.pagesData.results;
    });
  }

  onPrevButtonClick() {
    this.currentIndex -= 1;
  }

  onNextButtonClick() {
    this.currentIndex += 1;
  }
}
