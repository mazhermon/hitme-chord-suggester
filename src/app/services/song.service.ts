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
    // save song to mongo DB TODO ===

    return this._store.pipe(
      select(fromHitMe.getHitMeSongs),
      take(1),
      switchMap(songs => {
        console.log('songs is ', songs);
        // already doing this with save song success this._store.dispatch(new hitMeActions.AddSong(song));
        let songsToSave = [...songs, song];
        localStorage.setItem('hmlocalsongs', JSON.stringify(songsToSave));

        return of(song);
      })
    )
  }

  loadSongs(): Array<Song> {
    // move this to loadSongsFromLocalStorage Effect
    //get songs from local storage if there?
    const localStorageSongs = JSON.parse(localStorage.getItem('hmlocalsongs'));
    let songs = localStorageSongs || [];
    console.log('songs from lcoal storage ', songs);
    //this._store.dispatch(new hitMeActions.LoadSongsSuccess(songs));
    //return of(songs);
    return [];

  }
}
