import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class WebsiteActivate implements CanActivate{
    
    canActivate(){
        return true;
    }
}