import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ArticleComponent } from './article/article.component';
import { PageComponent } from './page/page.component';
import { SinglearticleComponent } from './singlearticle/singlearticle.component';
import { ArticlecardComponent } from './articlecard/articlecard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutpepoleComponent } from './aboutpepole/aboutpepole.component';
import { AboutComponent } from './about/about.component';
import { AbouthistoryComponent } from './abouthistory/abouthistory.component';
import { ChallengingmathsComponent } from './challengingmaths/challengingmaths.component';
import { MindgamesComponent } from './mindgames/mindgames.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    ArticleComponent,
    PageComponent,
    SinglearticleComponent,
    ArticlecardComponent,
    GalleryComponent,
    AboutpepoleComponent,
    AboutComponent,
    AbouthistoryComponent,
    ChallengingmathsComponent,
    MindgamesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, FooterComponent]
})
export class AppModule { }
