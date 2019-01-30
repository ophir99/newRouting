import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  obj = {
    name: 'Angular',
    version: 7
  }

  tool="Node JS";
  constructor() { }

  ngOnInit() {
  }

  catchData(e){
    console.log(e)
    this.tool = e.name;
  }

}
