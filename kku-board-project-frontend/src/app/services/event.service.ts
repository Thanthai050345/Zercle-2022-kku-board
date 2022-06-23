import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/assets/datas/url';
import { Countdown } from '../interfaces/countdown';
import { EventTable } from '../interfaces/even';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  baseUrl = baseUrl;
  constructor(private http: HttpClient) {}

  getEvenById(id: string | null | undefined) {
    return this.http.get<any[]>(this.baseUrl + 'events/eventForMyRole/' + id);
  }
  getCountdownUserById(id: string | null | undefined) {
    return this.http.get<Countdown[]>(
      this.baseUrl + 'countdown/students/' + id
    );
  }
  getCountdownClubById(id: string | null | undefined) {
    return this.http.get<Countdown[]>(this.baseUrl + 'countdown/clubs/' + id);
  }
  patchJoin(evenId: string | null | undefined, Uid: string | null | undefined) {
    return this.http.patch<any[]>(
      this.baseUrl + 'events/updateJoin/' + evenId + '/' + Uid,
      null
    );
  }
  getEventByStudentUid(id: string | null | undefined) {
    return this.http.get<EventTable[]>(this.baseUrl + 'events/students/' + id);
  }
  getEventClubByUid(id: string | null | undefined) {
    return this.http.get<Event[]>(this.baseUrl + 'events/clubs/' + id);
  }
  getEventUserByUid(id: string | null | undefined) {
    return this.http.get<Event[]>(this.baseUrl + 'events/students/' + id);
  }
  deleteEventClubByUid(id: string | null | undefined) {
    return this.http.delete<Event[]>(this.baseUrl + 'events/' + id);
  }
  patchUnJoin(
    evenId: string | null | undefined,
    Uid: string | null | undefined
  ) {
    return this.http.patch<any[]>(
      this.baseUrl + 'events/leftFromEvent/' + evenId + '/' + Uid,
      null
    );
    return this.http.patch<any[]>(this.baseUrl + 'events/updateJoin/' + evenId +'/'+ Uid,null);
  }
}
