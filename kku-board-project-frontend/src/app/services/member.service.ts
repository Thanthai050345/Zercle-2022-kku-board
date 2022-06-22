import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/assets/datas/url';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  baseUrl = baseUrl;
  constructor(private http: HttpClient) {}
  getMemberByClubId (clubId:string | null | undefined){
    return this.http.get<any[]>(this.baseUrl + 'members/' +clubId);
  }
}
