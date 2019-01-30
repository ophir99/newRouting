import { Component, OnInit, OnDestroy} from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {

  constructor(
    private randomS: RandomService
  ) { 
    console.log("Logging From Constructor")
  }

  ngOnInit() {
    console.log("Logging From NGONINIT")
  }

  ngOnDestroy(){
    console.log("GOOD Bye from Services")
    this.randomS.lastRoute = 'Services';
  }
}
