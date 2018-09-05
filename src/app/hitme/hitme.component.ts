import { Chord } from './../models/chord.model';
import { ChordService } from './../services/chord.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hm-hitme',
  templateUrl: './hitme.component.html',
  styleUrls: ['./hitme.component.scss']
})
export class HitmeComponent implements OnInit {

  constructor(
    private _chordService: ChordService
  ) { }

  ngOnInit() {
  }

  onHitMe(): void {
    // trigger a hit
    this._chordService.hit.next(true)
  }

}
