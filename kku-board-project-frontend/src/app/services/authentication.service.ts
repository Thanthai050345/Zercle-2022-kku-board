import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(public afAuth: AngularFireAuth) { }
  SignOut() {
    return this.afAuth.signOut().then(() => {
      window.alert('Logged out!');
    });
  }
}
