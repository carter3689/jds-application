import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public authservice:AuthenticationService, public router:Router) { }

   tryLogout(){
    this.authservice.doLogout()
      .then(res => {
        this.router.navigate(['/login'])
        console.log(res)
      })
  }

  ngOnInit() {
  }

}
