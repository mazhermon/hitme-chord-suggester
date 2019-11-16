import { Injectable } from '@angular/core';
import { Chord } from '../models/chord.model';
import { of, Observable, noop } from 'rxjs';

import * as fromHitMe from '../hitme/state/hitme.reducer';
import * as hitMeActions from '../hitme/state/hitme.actions';
import { Store, select } from '@ngrx/store';
import { switchMap, take, map } from 'rxjs/operators';

export interface Song {
  name: string,
  chords: Array<Chord>
}



@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(
    private _store: Store<fromHitMe.State>
  ) { }

  getSongs(): Observable<Array<Song>> {

    // move this to loadSongsFromLocalStorage Effect
    //get songs from local storage if there?
    // const localStorageSongs = JSON.parse(localStorage.getItem('hmlocalsongs'));
    // let returnSongs = localStorageSongs || [];
    //return of(returnSongs);

    return this._store.pipe(
      select(fromHitMe.getHitMeSongs),
      take(1)
    )
  }; 

  getSong(name): Observable<Song> {
    //return of(...SONGS.filter(song => song.name === name));
    return this._store.pipe(
      select(fromHitMe.getHitMeSongs),
      take(1),
      map(songs => {
        let songToReturn = songs.find(song => song.name === name);
        return songToReturn;
      })
    )
  }

  saveSong(song): Observable<Song> {
    return this._store.pipe(
      select(fromHitMe.getHitMeSongs),
      take(1),
      switchMap(songs => {
        let songsToSave = [...songs, song];
        // Save to local storage
        localStorage.setItem('hmlocalsongs', JSON.stringify(songsToSave));
        // TODO save song to mongo or Firebase DB TODO ===
        return of(song);
      })
    )
  }

  loadSongs(): Observable<Array<Song>> {
    //get songs from local storage if there?
    const localStorageSongs = JSON.parse(localStorage.getItem('hmlocalsongs'));
    let songs = localStorageSongs && [...localStorageSongs] || [{}];
    return of(songs);
  }
}
