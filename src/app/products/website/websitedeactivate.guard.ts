import { Injectable } from '@angular/core';
import { CanDeactivate } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class WebsiteDeactivate implements CanDeactivate<any>{


    canDeactivate(){
        return !false;
    }

}