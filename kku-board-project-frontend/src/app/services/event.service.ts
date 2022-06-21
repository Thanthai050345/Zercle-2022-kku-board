<<<<<<< Updated upstream
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Even } from '../interfaces/even'
<<<<<<< Updated upstream
=======
import { baseUrl } from 'src/assets/datas/url';
import { Countdown } from '../interfaces/countdown';
>>>>>>> a3150d0edf45ec47b2f1198fa2d6dadfec8fec28
=======
import { baseUrl } from 'src/assets/datas/url';
import { Countdown } from '../interfaces/countdown';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
export class EventService {
<<<<<<< Updated upstream
<<<<<<< HEAD
  baseUrl ='http://localhost:5001/zercle-2022-kku-board/asia-southeast2/api/v1/';
=======
  baseUrl = baseUrl
>>>>>>> Stashed changes
  constructor(private http: HttpClient) {}

  getEvenById(id:string | null | undefined) {
    return this.http.get<any[]>(this.baseUrl + 'events/eventForMyRole/' + id);
=======
  baseUrl = baseUrl
  constructor(private http: HttpClient) { }

  getCountdownUserById(id: string | null | undefined) {
    return this.http.get<Countdown[]>(this.baseUrl + 'countdown/students/' + id);
  }
  getCountdownClubById(id: string | null | undefined) {
    return this.http.get<Countdown[]>(this.baseUrl + 'countdown/clubs/' + id);
>>>>>>> a3150d0edf45ec47b2f1198fa2d6dadfec8fec28
  }
  getCountdownUserById(id: string | null | undefined) {
    return this.http.get<Countdown[]>(this.baseUrl + 'countdown/students/' + id);
  }
  getCountdownClubById(id: string | null | undefined) {
    return this.http.get<Countdown[]>(this.baseUrl + 'countdown/clubs/' + id);
  }
}

