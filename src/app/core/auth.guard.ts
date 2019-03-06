import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


import {AuthenticationService} from '../authentication.service'
import {tap, map, take} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthenticationService, private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if(!loggedIn){
          console.log('Access Denied')
          this.router.navigate(['/login'])
        }
      })
    ) 

    //  this.auth.user.subscribe((user)=>{ 
    //    if(user.uid) {
         
    //    }
    // }

    console.log(next)
    console.log(state)
    console.log(this.auth.user)
  }
}
