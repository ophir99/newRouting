import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  x;
  @Input()
  y;
  @Input()
  z;

  @Output()
  customE = new EventEmitter();

  data = {
    name: 'Data from child'
  }
  constructor() { }

  ngOnInit() {
  }

  sendData(){
    this.customE.emit(this.data)
  }

}
