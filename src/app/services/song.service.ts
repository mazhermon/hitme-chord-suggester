import { Injectable } from "@angular/core";
import { Chord } from "../models/chord.model";
import { of, Observable, noop } from "rxjs";

import * as fromHitMe from "../hitme/state/hitme.reducer";
import * as hitMeActions from "../hitme/state/hitme.actions";
import { Store, select } from "@ngrx/store";
import { switchMap, take, map } from "rxjs/operators";

export interface Song {
  name: string;
  chords: Array<Chord>;
}

@Injectable({
  providedIn: "root"
})
export class SongService {
  constructor(private _store: Store<fromHitMe.State>) {}

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
        return songs.find(song => song?.name === name);
      })
    );
  }

  saveSong(songToSave): Observable<Array<Song>> {
    return this._store.pipe(
      select(fromHitMe.getHitMeSongs),
      take(1),
      switchMap(songs => {
        let allSongsToSave: Array<Song>;
        let songAlreadyExists: boolean = !!songs.filter(
          existingSong => existingSong.name === songToSave.name
        ).length;

        if (songAlreadyExists) {
          allSongsToSave = [...songs];
          let updatedSongsToSave = songs.map((song, index) => {
            return songs[index] = song.name === songToSave.name ? songToSave : song;
          })
          allSongsToSave = [...updatedSongsToSave];

        } else {
          allSongsToSave = [...songs, songToSave];
        }
        
        localStorage.setItem("hmlocalsongs", JSON.stringify(allSongsToSave));
        return of(allSongsToSave);
      })
    );
  }

  loadSongs(): Observable<Array<Song>> {
    //get songs from local storage if there?
    const localStorageSongs = JSON.parse(localStorage.getItem("hmlocalsongs"));
    let songs = (localStorageSongs && [...localStorageSongs]) || [];
    return of(songs);
  }
}
