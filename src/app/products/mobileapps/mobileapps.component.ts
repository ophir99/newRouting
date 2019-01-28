import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobileapps',
  templateUrl: './mobileapps.component.html',
  styleUrls: ['./mobileapps.component.css']
})
export class MobileappsComponent implements OnInit {

  childMenu =[
    {
      label: 'Nokia'
    },
    {
      label: 'Samsung'
    },
    {
      label: 'HTC',

    },
    {
      label: 'Sony'
    },
    {
      label: 'Apple'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
