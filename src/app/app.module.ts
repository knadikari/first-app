import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/sever.componet';
import { SubserverComponent } from './subserver/subserver.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { YellowComponent } from './yellow/yellow.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ArticleComponent } from './article/article.component';

const appRoutes: Routes = [
  { path: 'app-login', component: LoginComponent},
  { path: '', component: HomeComponent},
  { path: 'app-registration', component: RegistrationComponent},
  { path: 'app-article', component: ArticleComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SubserverComponent,
    RedComponent,
    GreenComponent,
    YellowComponent,
    FormComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    ArticleComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, FooterComponent]
})
export class AppModule { }
