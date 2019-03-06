import { Component, OnInit, HostListener} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AngularFireDatabase} from '@angular/fire/database'


@Component({
  selector: 'app-intakeform',
  templateUrl: './intakeform.component.html',
  styleUrls: ['./intakeform.component.scss']
})
export class IntakeformComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
      }
    }
  constructor( fb:FormBuilder,private af: AngularFireDatabase) {
    this.contactForm = fb.group({
      'agencyname': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'agencycontactname': ['', Validators.required],
      'phonenumber': ['', Validators.required],
      'contactnumber': [''],
      'employmenttraining':[''],
      'eligibilityage':[''],
      'eligibilityarea':[''],
      'demographicgender':[''],
      'demographicethnicity':['']
      });
   }

   onSubmit(){
    const {agencyname,email,agencycontactname,phonenumber,contactnumber,employmenttraining,eligibilityage,eligibilityarea,demographicgender,demographicethnicity} = this.contactForm.value;
    const date = Date();
    let formRequest = {agencyname,email,agencycontactname,phonenumber,contactnumber,date,employmenttraining,eligibilityage,eligibilityarea,demographicgender,demographicethnicity};

    this.af.list('/intake').push(formRequest)
    this.contactForm.reset();
  }

  ngOnInit() {
  }

}
