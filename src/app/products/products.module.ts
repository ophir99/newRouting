import { NgModule  } from "@angular/core"
import { ProductsComponent } from './products.component';
import { CloudComponent } from './cloud/cloud.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { WebsiteComponent } from './website/website.component';
import { MobileappsComponent } from './mobileapps/mobileapps.component';

import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        ProductsComponent,
        CloudComponent,
        ProductsHomeComponent,
        WebsiteComponent,
        MobileappsComponent
    ],
    imports: [
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
                component: MobileappsComponent
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