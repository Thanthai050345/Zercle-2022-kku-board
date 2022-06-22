import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/assets/datas/url';
import { Countdown } from '../interfaces/countdown';
import { EventTable } from '../interfaces/even';

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
<<<<<<< HEAD
  patchJoin(evenId: string | null | undefined, Uid: string | null | undefined) {
    return this.http.patch<any[]>(this.baseUrl + 'events/updateJoin/' + evenId +'/'+ Uid,null);
=======
  getEventByUid(id: string | null | undefined) {
    return this.http.get<EventTable[]>(this.baseUrl + 'events/students/' + id);
>>>>>>> ddee03bf120aafd566a3d5aac942b928349dc396
  }
}
