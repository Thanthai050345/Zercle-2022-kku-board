import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { baseUrl } from 'src/assets/datas/url';

@Injectable()
export class CatchApiInterceptor implements HttpInterceptor {
  responseCache = new Map();
  baseUrl = baseUrl;
  uid: string | null | undefined;
  constructor() {
    this.uid = localStorage.getItem('userUid');
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      !this.canCacheUser(request)
      // !this.canCacheCountdownUser(request) &&
      // !this.canCacheClub(request) &&
      // !this.canCacheCountdownClub(request)
    ) {
      return next.handle(request);
    }
    const cache = this.responseCache.get(request.urlWithParams);
    if (cache) {
      return of(cache);
    }
    return next.handle(request).pipe(
      tap((response) => {
        this.responseCache.set(request.urlWithParams, response);
      })
    );
  }
  canCacheUser(request: HttpRequest<unknown>): boolean {
    return request.urlWithParams.includes(
      this.baseUrl + 'users/students/' + this.uid
    );
  }
  canCacheCountdownUser(request: HttpRequest<unknown>): boolean {
    return request.urlWithParams.includes(
      this.baseUrl + 'countdown/students/' + this.uid
    );
  }
  canCacheClub(request: HttpRequest<unknown>): boolean {
    return request.urlWithParams.includes(
      this.baseUrl + 'users/clubAdmins/' + this.uid
    );
  }
  canCacheCountdownClub(request: HttpRequest<unknown>): boolean {
    return request.urlWithParams.includes(
      this.baseUrl + 'countdown/clubs/' + this.uid
    );
  }
}
