import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Song, SongService } from "../../services/song.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import * as hitMeActions from "../../hitme/state/hitme.actions";
import * as fromHitMe from "../../hitme/state/hitme.reducer";
import { take } from "rxjs/operators";

@Component({
  selector: "hm-song",
  templateUrl: "./song.component.html",
  styleUrls: ["./song.component.scss"]
})
export class SongComponent implements OnInit {
  public song$: Observable<Song>;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    private _store: Store<fromHitMe.HitMeState>
  ) {}

  ngOnInit() {
    this.getSong();
  }

  getSong(): void {
    const name = this.route.snapshot.paramMap.get("name");
    this.song$ = this.songService.getSong(name);

    this.song$
      .pipe(take(1))
      .subscribe(song =>
        this._store.dispatch(new hitMeActions.SetUserChords(song.chords))
      );
  }

  onEditSong(): void {
    // dispatch action to send these chords into user chords state
    // route to home page and load these chords
    // or
    // stay on song page but show chord input controls?
    //
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
