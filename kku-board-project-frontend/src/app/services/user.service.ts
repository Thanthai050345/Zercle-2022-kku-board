import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl =
    'http://localhost:5001/zercle-2022-kku-board/asia-southeast2/api/v1/';
  user: any;
  constructor(private http: HttpClient) {}
  getAllUser() {
    return this.http.get<any[]>(this.baseUrl + 'users/allUsers');
  }
  postUser(data: User) {
    return this.http.post(this.baseUrl + 'register/student', data)
  }
}
