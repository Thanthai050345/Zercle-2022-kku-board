import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}
  login(username: string, password: string) {
    console.log(this.auth);
    console.log(this.auth.currentUser?.displayName);
    // localStorage.setItem('user',)
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }
  logout() {
    this.router.navigate(['/login']);
    return from(this.auth.signOut());
  }
}
