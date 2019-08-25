import { Component, OnInit } from '@angular/core';
import { SongService, Song } from '../services/song.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'hm-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  public songs$: Observable<Array<Song>>;

  constructor(
    private songService: SongService
  ) { }

  ngOnInit() {
    this.songs$ = this.songService.getSongs();
  }

  trackByName = (index, song: Song) => song.name;

}
