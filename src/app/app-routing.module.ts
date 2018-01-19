import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StarwarsComponent } from './starwars/starwars.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  { path: 'starwars', component: StarwarsComponent },
  { path: 'github', component: GithubComponent },
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
