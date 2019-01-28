import { PreloadingStrategy } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class Simple implements PreloadingStrategy{

    preload(route, preload):any{
          if(route.path=='products'){
              setTimeout(()=>{
                  return preload()
              },5000)
          }
          else{
            setTimeout(()=>{
                return preload()
            },10000)
          }
    }
}