import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Even } from '../interfaces/even'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl ='http://localhost:5001/zercle-2022-kku-board/asia-southeast2/api/v1/';
  constructor(private http: HttpClient) {}

  getEvenById(id:string | null | undefined) {
    return this.http.get<any[]>(this.baseUrl + 'events/eventForMyRole/' + id);
  }
}
