import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

// this service load when root get load. 'root' / 'inModule'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) {

  }

  login(user) {
    // spring security support format: form data / form urlencoded data
    const userparam = new HttpParams()
      .append('username', user.username)
      .append('password', user.password);
    return this.httpClient.post(`${environment.API_URL}/login`, userparam,
      {withCredentials: true});
  }

  logout() {
    return this.httpClient.get(`${environment.API_URL}/logout`);
  }
}
