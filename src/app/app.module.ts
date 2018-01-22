import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StarwarsComponent } from './starwars/starwars.component';
import { GithubComponent } from './github/github.component';
import { GithubFormComponent } from './github/githubform/githubForm.component';
import { PreloaderComponent } from './preloader/preloader.component';

import { StarwarsService } from './services/starwars.service';
import { GithubService } from './services/github.service';
import { GithubpreloaderComponent } from './githubpreloader/githubpreloader.component';

@NgModule({
  declarations: [
    AppComponent,
    StarwarsComponent,
    GithubComponent,
    GithubFormComponent,
    PreloaderComponent,
    GithubpreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  providers: [ StarwarsService, GithubService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
