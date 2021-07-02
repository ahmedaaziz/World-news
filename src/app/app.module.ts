import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './features/header/main-header/main-header.component';
import { HeaderMenuComponent } from './features/header/header-menu/header-menu.component';
import { TopHeaderComponent } from './features/header/top-header/top-header.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiService } from './shared/newsapi/newsapi.service';
import { HeadlineComponent } from './features/headline/headline.component';
import { CallToActionSectionComponent } from './features/call-to-action-section/call-to-action-section.component';
import { HomeComponent } from './pages/home/home.component';
import { CovidNewsComponent } from './features/covid-news/covid-news.component';
import { PoliticalPageComponent } from './pages/political-page/political-page.component';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FooterComponent } from './features/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    MainHeaderComponent,
    HeaderMenuComponent,
    HeadlineComponent,
    CallToActionSectionComponent,
    HomeComponent,
    CovidNewsComponent,
    PoliticalPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
