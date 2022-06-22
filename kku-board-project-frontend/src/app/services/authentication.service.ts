import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(public afAuth: AngularFireAuth, private router: Router) {}
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['/login']);
    });
  }
}
