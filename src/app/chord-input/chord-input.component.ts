import { Component, OnInit } from '@angular/core';
import { ChordService } from '../services/chord.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../state/app-state';
import { AddUserChordAction } from '../state/hitme/hitme.actions';

@Component({
  selector: 'hm-chord-input',
  templateUrl: './chord-input.component.html',
  styleUrls: ['./chord-input.component.scss']
})
export class ChordInputComponent {

  constructor( 
    public chordService: ChordService,
    private store: Store<ApplicationState>
    ) { }

  onChordSelect(event) {
    //this.chordService.sendChord(event.currentTarget.value);
    // switch to use the store
    this.store.dispatch(new AddUserChordAction(event.currentTarget.value));
  }
}
