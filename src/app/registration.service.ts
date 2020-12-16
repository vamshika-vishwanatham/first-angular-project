import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { CreateInfo } from './login/login-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private _url = "/assets/userInfo.json";
  constructor(private _http: HttpClient) {}
  register(userData): Observable<CreateInfo[]> {
    return this._http.post<CreateInfo[]>(this._url, userData);
  }
}
