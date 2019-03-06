import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';

import {AuthenticationService} from './authentication.service'
import { AngularFirestore } from '@angular/fire/firestore';

import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './views/errors/error.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth'

// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { IntakeformComponent } from './intake/intakeform/intakeform.component';
import { AngularFireDatabase} from '@angular/fire/database';
import { YouthlistComponent } from './youthlist/youthlist.component';
import { LogoutComponent } from './logout/logout.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    IntakeformComponent,
    YouthlistComponent,
    LogoutComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    AppRoutes,
    RouterModule,
    FormsModule,
    SharedModule,
    ViewsModule,
    ErrorModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    
  ],
  providers: [AuthenticationService,AngularFireAuth,AngularFireDatabase,AngularFirestore],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
