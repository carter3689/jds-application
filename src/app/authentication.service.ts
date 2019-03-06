// import { Injectable } from '@angular/core';
// import { Router } from "@angular/router";
// import {AngularFireAuth} from '@angular/fire/auth'

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {

//   constructor(
//     public afAuth:AngularFireAuth,
//     public router: Router
//   ) { }

     // Sign up with email/password
  // SignUp(email:string, password:string) {
  //   return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       window.alert("You have been successfully registered!");
  //       console.log(result.user)
  //     }).catch((error) => {
  //       window.alert(error.message)
  //     })
  // }

  // Sign in with email/password
  // async SignIn(value) {
  //   debugger
  //   return await this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
  //     .then((result) => {
  //        this.router.navigate(['/dashboards/v1']);
  //        console.log(result.user)
  //     }).catch((error) => {
  //       window.alert(error.message)
  //     })
  // }

  // SignIn(value){
  //   this.afAuth.auth.signInWithEmailAndPassword(value.email,value.password)
  //     .catch(function(error){
  //       console.log(error.message)
  //     })
  // }
//}

import { Injectable } from "@angular/core";
// import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import {Observable, of}  from 'rxjs';
import {switchMap} from 'rxjs/operators'

interface User {
  uid:string;
  email:string;
  photoURL?: string;
  displayName?:string;
}

@Injectable()
export class AuthenticationService {

  user:Observable<User>;

  constructor(
   public afAuth: AngularFireAuth,
   private afs:AngularFirestore,
   private router:Router
 ){
   this.user = this.afAuth.authState.pipe(
     switchMap(user => {
       if(user){
        return this.afs.doc<User>('users/${user.uid').valueChanges()
       } else {
         return of (null)
       }
     })
   )
 }


  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
  }

  doTwitterLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.TwitterAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
  }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
  }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        this.updateUserData(res.user)
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        this.updateUserData(res.user)
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogout(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        this.afAuth.auth.signOut().then(() =>{
          this.router.navigate(['/login'])
        })
        resolve();
      }
      else{
        reject();
      }
    });
  }

  public updateUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc('users/$user.uid');

    const data: User = {
      uid:user.uid,
      email:user.email,
      displayName:user.displayName,
      photoURL:user.photoURL
    }
    return userRef.set(data,{merge:true})
  }


}


