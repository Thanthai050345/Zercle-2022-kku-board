import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Club } from '../interfaces/club';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseStydentsURL =
    'http://localhost:5001/zercle-2022-kku-board/asia-southeast2/api/v1/users/students/';
  baseclubURL =
    'http://localhost:5001/zercle-2022-kku-board/asia-southeast2/api/v1/users/clubAdmins/';
  constructor(private http: HttpClient) {}
  getUserById(id: string | undefined) {
    return this.http.get<User[]>(this.baseStydentsURL + id);
  }
  getClubById(id: string | undefined) {
    return this.http.get<Club[]>(this.baseclubURL + id);
  }
}
