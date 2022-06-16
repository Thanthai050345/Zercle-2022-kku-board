import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}
  login(username: string, password: string) {
    console.log(this.auth);
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }
  logout() {
    return from(this.auth.signOut());
  }
  
}
