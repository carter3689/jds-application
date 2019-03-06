import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {AuthenticationService} from '../../authentication.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav') sidenav: ElementRef;

  clicked: boolean;



  constructor(public authservice:AuthenticationService, public router:Router) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  logout(){
    this.authservice.doLogout()
    .then(res => {
      this.router.navigate(['/login'])
      console.log(res)
    } )
  }

  ngOnInit() {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

}
