import { Injectable } from "@angular/core";
import { Chord } from "../models/chord.model";
import { of, Observable, noop } from "rxjs";

import * as fromHitMe from "../hitme/state/hitme.reducer";
import * as hitMeActions from "../hitme/state/hitme.actions";
import { Store, select } from "@ngrx/store";
import { switchMap, take, map, delay } from "rxjs/operators";

import { AngularFirestore } from "@angular/fire/firestore";
import "firebase/firestore";
import { AuthService } from "../auth/auth.service";
import { isArray } from "util";

export interface Song {
  name: string;
  chords: Array<Chord>;
}

@Injectable({
  providedIn: "root"
})
export class SongService {
  constructor(
    private _store: Store<fromHitMe.State>,
    private _db: AngularFirestore,
    private _authService: AuthService
  ) {}

  getSongs(): Observable<Array<Song>> {
    // move this to loadSongsFromLocalStorage Effect
    //get songs from local storage if there?
    // const localStorageSongs = JSON.parse(localStorage.getItem('hmlocalsongs'));
    // let returnSongs = localStorageSongs || [];
    //return of(returnSongs);

    return this._store.pipe(select(fromHitMe.getHitMeSongs), take(1));
  }

  getSong(name): Observable<Song> {
    //return of(...SONGS.filter(song => song.name === name));
    return this._store.pipe(
      select(fromHitMe.getHitMeSongs),
      take(1),
      map(songs => {
        let songToReturn = songs.find(song => song.name === name);
        return songToReturn;
      })
    );
  }

  saveSong(song): Observable<Song> {
    return this._store.pipe(
      select(fromHitMe.getHitMeSongs),
      take(1),
      switchMap(songs => {
        if (this._authService.isAuth()) {
          console.log("saving song to firestore database", song.name);
          this.saveSongToDB(song);
        } else {
          console.log(`saving ${song.name} to localstorage`);
          let songsToSaveToLocalStorage = [...songs, song];
          localStorage.setItem(
            "hmlocalsongs",
            JSON.stringify(songsToSaveToLocalStorage)
          );
        }
        return of(song);
      })
    );
  }

  saveSongToDB(song): void {
    let currentUserEmail = this._authService.getCurrentUserEmail();
    console.log("saving song to db: ", song);
    console.log("for user: ", currentUserEmail);
    this._db.collection(currentUserEmail).add(song);
  }

  loadSongs(): Observable<Array<Song>> {
    let isAuth = this._authService.isAuth();
    if (isAuth) {
      let currentUserEmail = this._authService.getCurrentUserEmail();
      return this._db.collection<Song>(currentUserEmail).valueChanges();
    } else {
      const localStorageSongs = JSON.parse(
        localStorage.getItem("hmlocalsongs")
      );
      let songs = (localStorageSongs && [...localStorageSongs]) || [{}];
      return of(songs);
    }
  }
}
