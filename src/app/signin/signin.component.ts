import { Component, OnInit,HostListener } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  contactForm: FormGroup;
disabledSubmitButton: boolean = true;
optionsSelect: Array<any>;

  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }

  constructor(public authservice:AuthenticationService,fb: FormBuilder, private router:Router) {
    this.contactForm = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
      });
   }

   trySignIn(value){
     this.authservice.doLogin(value)
      .then(res => {
        this.router.navigate(['/dashboards/v1'])
        console.log(res)
      })
   }


  ngOnInit() {
  }

}
