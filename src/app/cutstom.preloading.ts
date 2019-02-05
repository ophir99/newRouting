import { PreloadingStrategy } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class CustomPreLoading implements PreloadingStrategy{

    preload(route, load){
        console.log(route);
        if(route.path == 'services'){
            return null
        }
        return load();
    }

}