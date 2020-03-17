import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { Subject } from "rxjs";

import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { State } from "../state/app.reducer";

import * as hitMeActions from "../hitme/state/hitme.actions";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _user: User;
  public _isAuthenticated = false;
  private _currentUserEmail: string;

  public authChange$ = new Subject<boolean>();

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private _store: Store<State>
  ) {}

  public initAuthListener(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this._onAuthChangeLogged_IN(user);
      } else {
        this._onAuthChangeLogged_OUT();
      }
    });
  }

  private _onAuthChangeLogged_IN(user) {
    console.log("afAuth logged in");
    this._isAuthenticated = true;
    this._currentUserEmail = user.email;
    this.authChange$.next(true);
    this._store.dispatch(new hitMeActions.LoadSongs());
    this.router.navigate(["/"]);
  }

  private _onAuthChangeLogged_OUT() {
    console.log("afAuth logged OUT");
    this._isAuthenticated = false;
    this._currentUserEmail = null;
    this.authChange$.next(false);
    this._store.dispatch(new hitMeActions.LoadSongs());
  }

  public registerUser(authData: AuthData): void {
    const { email, password } = authData;
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log("yeep, you've registered in successfully");
      })
      .catch(error => {
        console.log("error >>> nah bo", error);
      });
  }

  public loginUser(authData: AuthData): void {
    const { email, password } = authData;
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log("yep you're logged in", result);
      })
      .catch(error => {
        console.log("nah bo", error);
      });
  }

  public logout(): void {
    this.afAuth.auth.signOut();
    // TODO clear song list from state
  }

  public isAuth(): boolean {
    return this._isAuthenticated;
  }

  public getCurrentUserEmail() {
    console.log("get user is ", this._currentUserEmail);
    return this._currentUserEmail;
  }
}
