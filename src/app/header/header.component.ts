import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  constructor(
    private router: Router
  ) { 
    // this.router.navigateByUrl('/products/web')
    this.router.events.subscribe(
      (data)=>{
        console.log("Route....", this.router.url);
        if(this.router.url !== '/home'){
          console.log("done")
          this.showMenu = true;
        }else{
          this.showMenu = false;
        }
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  ngOnInit() {
    
  }

}
