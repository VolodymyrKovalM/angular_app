import { Component, OnInit } from '@angular/core';
import { GithubReposService } from '../services/githubrepos.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-githubrepos',
  templateUrl: './githubrepos.component.html',
  styleUrls: ['./githubrepos.component.scss'],
  providers: [ GithubReposService ]
})
export class GithubreposComponent implements OnInit {

  constructor(
    private reposService: GithubReposService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const userName = this.route.snapshot.paramMap.get('login');
    this.reposService.fetchRepos(userName);
  }
}
