import { Chord } from './../models/chord.model';
import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'hm-chord-display',
  templateUrl: './chord-display.component.html',
  styleUrls: ['./chord-display.component.scss'],
  animations: [
    trigger('onChangeChords', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(0.9)'
        }),
        animate(80)
      ]),
      transition('* => void', animate(80, style({
        opacity: 0,
        transform: 'scale(0.9)'
      })))
    ])
  ]
})
export class ChordDisplayComponent {
  @Input() displayChords: Array<Chord>;

  hmChordDisplayOnChange (): void {
    console.log('on chord display change fired');
  }
}
