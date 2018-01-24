import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StarwarsComponent } from './starwars/starwars.component';
import { GithubComponent } from './github/github.component';
import { GithubreposComponent } from './githubrepos/githubrepos.component';

const routes: Routes = [
  { path: 'starwars', component: StarwarsComponent },
  { path: 'github', component: GithubComponent },
  { path: 'github/repos/:login', component: GithubreposComponent },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
