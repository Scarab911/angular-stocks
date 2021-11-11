import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  private _token?: string;

  constructor(private http: HttpClient) { 
    this._token = window.sessionStorage.getItem("token") || undefined;
  }

  //tikrinam ar toks useris prisilogines
  public get isLoggedIn(): boolean {
    return !!this._token;
  }

  //siunciam registravimosi uzklausa serveriui
  public register(userData: User): Observable<object> {
    return this.http.post('http://localhost:3000/api/user/register',userData);
  }

  //siunciam prisijungimo uzklausa serveriui ir laukiam TOKEN
  public login(userData: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:3000/api/user/login',userData);
  }

  //gaunam TOKEN ir irasom i browserio sesijos(sesion) storage:
  public getToken(token:string): void {
    this._token = token;
    window.sessionStorage.setItem('token', this._token);
  }
  //paverciam token'a is private i public ir grazinama per geteri
  public get token(): string| undefined {
    return this._token;
  }

  public LogOut(): void {
    window.sessionStorage.removeItem('token');
  }
}
//pasirasom interface ir susikonkretinam gaunama login objekto tipa! nera butina bet..
export interface LoginResponse{
  msg: string,
  token: string
}
