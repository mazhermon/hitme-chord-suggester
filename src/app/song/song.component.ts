import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Song, SongService } from '../services/song.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'hm-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  public song$: Observable<Song>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private songService: SongService
  ) { }

  ngOnInit() {
    this.getSong();
  }

  getSong(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.song$ = this.songService.getSong(name);
  }

}

// send current chords to state for userChords
// dispatch an action from here 'setUserChords'
// listen in the hitme reducer
// edit song will be done in hitme component as normal

// add edit button in this component that dispatches the action
// once the action is dispatched we can route
// check on timing of these two things, likely need to wait for the 
// action to be dispatched before routing away