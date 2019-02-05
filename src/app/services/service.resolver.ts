import { Injectable } from '@angular/core';

import { Resolve } from "@angular/router";
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class ServicesResolver implements Resolve<any>{
    constructor(
        private dataService: DataService
    ){

    }
    resolve(){
        console.log("Loggging from Resolver");
        return this.dataService.getData()
    }
}