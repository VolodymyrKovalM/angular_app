import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-form',
  templateUrl: './githubform.component.html',
  styleUrls: ['./githubform.component.scss']
})
export class GithubFormComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit() {
    console.log(user);
  }

}
