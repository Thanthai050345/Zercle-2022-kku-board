import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/assets/datas/url';
import { Countdown } from '../interfaces/countdown';
import { EventTable } from '../interfaces/even';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl = baseUrl
  constructor(private http: HttpClient) { }

  getCountdownUserById(id: string | null | undefined) {
    return this.http.get<Countdown[]>(this.baseUrl + 'countdown/students/' + id);
  }
  getCountdownClubById(id: string | null | undefined) {
    return this.http.get<Countdown[]>(this.baseUrl + 'countdown/clubs/' + id);
  }
  getEventByUid(id: string | null | undefined) {
    return this.http.get<EventTable[]>(this.baseUrl + 'events/students/' + id);
  }
}
