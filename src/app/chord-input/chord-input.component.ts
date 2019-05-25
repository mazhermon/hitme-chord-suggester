import { Component } from '@angular/core';
import { HitMeState } from '../hitme/state/hitme.reducer';
import { Store } from '@ngrx/store';
import * as hitMeActions from '../hitme/state/hitme.actions';

@Component({
  selector: 'hm-chord-input',
  templateUrl: './chord-input.component.html',
  styleUrls: ['./chord-input.component.scss']
})
export class ChordInputComponent {

  constructor(
    public store: Store<HitMeState>
  ) { }

  onChordSelect(event) {
    this.store.dispatch(new hitMeActions.CreateUserChord(event.currentTarget.value));
  }
}
