import { Injectable } from '@angular/core';
import { Countdown } from 'src/app/interfaces/countdown';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountDownService {
  baseEventURL =
    'http://localhost:5001/zercle-2022-kku-board/asia-southeast2/api/v1/countdown/';
  constructor(private http: HttpClient) { }
  getcountdownClubID(uid: string | undefined) {
    return this.http.get<Countdown[]>(this.baseEventURL+ 'clubs/' + uid);
  }
  getcountdownStudent(uid: string | undefined) {
    return this.http.get<Countdown[]>(this.baseEventURL+ 'students/' + uid);
  }

}
