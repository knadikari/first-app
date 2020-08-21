import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ArticleComponent } from './article/article.component';
import { SinglearticleComponent } from './singlearticle/singlearticle.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    // {path: 'home', component: PageComponent, data: {page: 'home'}},
    // {path: 'about', component: PageComponent, data: {page: 'about'}},
    // {path: 'contact', component: PageComponent, data: {page: 'contact'}},
    // { path: 'login', component: PageComponent, data: {page: 'login'}},
    // { path: 'registration', component: PageComponent, data: {page: 'registration'}},
    // { path: 'article', component: PageComponent, data: {page: 'article'}},
    { path: 'app-home', component: HomeComponent},
    { path: 'app-login', component: LoginComponent},
    { path: 'app-registration', component: RegistrationComponent},
    { path: 'app-article', component: ArticleComponent},
    { path: 'singlearticle/:id', component: SinglearticleComponent},
    { path: 'app-gallery', component: GalleryComponent},
    {path: '**', redirectTo: 'app-home', pathMatch: 'full'},
  ];

  @NgModule ({
      imports: [RouterModule.forRoot(appRoutes)],
      exports: [RouterModule]
  })

  export class AppRoutingModule {
  }