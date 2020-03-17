import { Component, OnInit } from '@angular/core';
import { SongService, Song } from '../services/song.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromHitMe from '../hitme/state/hitme.reducer'
import { take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'hm-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  public songs$: Observable<Array<Song>>;

  constructor(
    //private songService: SongService,
    private _store: Store<fromHitMe.State>,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    //this.songs$ = this.songService.getSongs();

    this.songs$ = this._store.pipe(
      select(fromHitMe.getHitMeSongs),
      take(1)
    ) 
  }

  trackByName = (index, song: Song) => song.name;

}
