import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { ApidevComponent } from './apidev/apidev.component';
import { WebdevComponent } from './webdev/webdev.component';
import { AutomationComponent } from './automation/automation.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [ServicesComponent,ServicesHomeComponent, ApidevComponent, WebdevComponent, AutomationComponent],
    imports: [
        RouterModule.forChild([{
            path: '',
            component: ServicesComponent,
            children: [
              {
                path: '',
                component: ServicesHomeComponent,
    
              },
              {
                path: 'webdev',
                component: WebdevComponent
              },
              {
                path: 'apidev',
                component: ApidevComponent
              },
              {
                path: 'automation',
                component: AutomationComponent
              }
            ]
          }])
    ]
})
export class ServicesModule{

}