import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StarwarsComponent } from './starwars/starwars.component';
import { GithubComponent } from './github/github.component';
import { PreloaderComponent } from './preloader/preloader.component';

import { StarwarsService } from './services/starwars.service';


@NgModule({
  declarations: [
    AppComponent,
    StarwarsComponent,
    GithubComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  providers: [ StarwarsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
