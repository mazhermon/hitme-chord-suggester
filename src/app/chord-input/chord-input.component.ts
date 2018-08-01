import { Component, OnInit } from '@angular/core';
import { SendChordService } from '../services/send-chord.service';

@Component({
  selector: 'hm-chord-input',
  templateUrl: './chord-input.component.html',
  styleUrls: ['./chord-input.component.scss']
})
export class ChordInputComponent implements OnInit {

  constructor( public sendChordService: SendChordService) { }

  ngOnInit() {
  }

  onChordSelect(event) {
    this.sendChordService.sendChord(event.target.value);
  }

}
