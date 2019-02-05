import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule, PreloadAllModules } from "@angular/router";
import { ErrComponent } from './err/err.component';
import { ProductsModule } from './products/products.module';
import { ServicesModule } from './services/service.module';
import { Simple } from './one';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomPreLoading } from './cutstom.preloading';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ErrComponent,
    ChildComponent,
  ],
  imports: [
    HttpClientModule,
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
        path: 'products',
        loadChildren: './products/products.module#ProductsModule',
        data:{
          delay: 5
        }
      },
      {
        path: 'services',
        loadChildren: './services/service.module#ServicesModule',
        data:{
          delay: 0
        }
      },
      {
        path: "**",
        component: ErrComponent
        // redirectTo: 'contact',
        // pathMatch: 'full'
      }
    ], {
      preloadingStrategy: CustomPreLoading
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
