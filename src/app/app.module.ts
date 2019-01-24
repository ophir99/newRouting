import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule } from "@angular/router";
import { ErrComponent } from './err/err.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ErrComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // {
      //   path: "",
      //   component: HomeComponent
      // },
      {
        path: "",
        redirectTo: "home",
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'aboutus',
        component: AboutusComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: "**",
        component: ErrComponent
        // redirectTo: 'contact',
        // pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
