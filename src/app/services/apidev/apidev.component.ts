import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apidev',
  templateUrl: './apidev.component.html',
  styleUrls: ['./apidev.component.css']
})
export class ApidevComponent implements OnInit {

  constructor(
    private activatedR: ActivatedRoute
  ) { 
    console.log("Logging from constructor");
    this.activatedR.data.subscribe(
      res => {
        console.log(res);
      }
    )
  }

  ngOnInit() {
    console.log("Logging from On Init")
  }

}
