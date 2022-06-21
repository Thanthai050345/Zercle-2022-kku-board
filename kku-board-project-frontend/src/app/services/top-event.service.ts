
import { Injectable } from '@angular/core';
import { dataEvent } from '../interfaces/dataEvent';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TopEventService {
  baseEventURL =
    'http://localhost:5001/zercle-2022-kku-board/asia-southeast2/api/v1/';
  constructor(private http: HttpClient) { }
  insertProduct(id: string | undefined) {
    return this.http.get<dataEvent[]>(this.baseEventURL+ 'topEvents/' + id);
  }
}
