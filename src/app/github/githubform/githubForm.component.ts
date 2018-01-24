import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github-form',
  templateUrl: './githubform.component.html',
  styleUrls: ['./githubform.component.scss']
})
export class GithubFormComponent implements OnInit {
  @Input() user: any;
  @Input() userNumber: string;
  constructor(private gitService: GithubService) { }

  ngOnInit() {
  }

  onSubmit(userNumber) {
    this.gitService.fetchUser(userNumber);
  }
}
