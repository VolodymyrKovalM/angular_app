import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-githubuser',
  templateUrl: './githubuser.component.html',
  styleUrls: ['./githubuser.component.scss']
})
export class GithubuserComponent implements OnInit {
  @Input() user: object;
  @Input() userNumber: string;
  constructor(private gitService: GithubService) { }

  ngOnInit() {
  }

  resetUser(userName) {
    this.gitService.resetUser(userName);
  }
}
