import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private _user: User;

  public registerUser(authData: AuthData): void {
    this._user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    }
  }

  public loginUser(authData: AuthData): void {
    this._user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    }
  }

  public logout(): void {
    this._user = null;
  }

  public getUser(): User {
    return { ...this._user };
  }

  public isAuth(): boolean {
    return this._user != null;
  }

}
