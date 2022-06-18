import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router) {}

  login(email: string, password: string) {

   
  }
  logout() {
    this.router.navigate(['/login']);
    
  }
}
