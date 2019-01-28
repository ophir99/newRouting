import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  mobileName:string;
  constructor(
    private activatedR: ActivatedRoute
  ) { 

    this.activatedR.params.subscribe(
      (data)=>{
        console.log(data);
        this.mobileName = data.app;
      }
    )
  }

  ngOnInit() {
  }

}
