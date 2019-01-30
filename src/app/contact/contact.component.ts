import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  prevR;
  constructor(
    private randomS: RandomService
  ) { }

  ngOnInit() {
    this.prevR = this.randomS.lastRoute;
  }

}
