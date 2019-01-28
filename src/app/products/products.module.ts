import { NgModule  } from "@angular/core"
import { ProductsComponent } from './products.component';
import { CloudComponent } from './cloud/cloud.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { WebsiteComponent } from './website/website.component';
import { MobileappsComponent } from './mobileapps/mobileapps.component';

import { RouterModule } from "@angular/router";
import { MobileComponent } from './mobileapps/mobile/mobile.component';
import { MobilehomeComponent } from './mobileapps/mobilehome/mobilehome.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ProductsComponent,
        CloudComponent,
        ProductsHomeComponent,
        WebsiteComponent,
        MobileappsComponent,
        MobileComponent,
        MobilehomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: ProductsComponent,
            children: [
              {
                path: '',
                component: ProductsHomeComponent
              },
              {
                path: 'websites',
                component: WebsiteComponent
              },
              {
                path: 'mobileapps',
                component: MobileappsComponent,
                children: [
                  {
                    path: "",
                    component: MobilehomeComponent

                  },
                  {
                    path: ':app',
                    component: MobileComponent
                  }
                ]
              },
              {
                path: 'cloud',
                component: CloudComponent
              }
            ]
          }])
    ]
})
export class ProductsModule{

}