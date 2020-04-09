import { Component, OnInit } from "@angular/core";
import { HitMeState } from "../hitme/state/hitme.reducer";
import { Store, select } from "@ngrx/store";
import * as hitMeActions from "../hitme/state/hitme.actions";
import * as fromSettings from "../settings/state/settings.reducer";
import { ChordSetter } from "../models/chord.model";

@Component({
  selector: "hm-chord-input",
  templateUrl: "./chord-input.component.html",
  styleUrls: ["./chord-input.component.scss"]
})
export class ChordInputComponent implements OnInit {
  private key: fromSettings.KeyCentre;
  constructor(public store: Store<HitMeState>) {}

  ngOnInit(): void {
    this.store
      .pipe(select(fromSettings.getGlobalKeyCenter))
      .subscribe(key => (this.key = key));
  }

  onChordSelect(event) {
    let chordNumeral = event.currentTarget.value;
    let key: fromSettings.KeyCentre = this.key;
    let chordSetter: ChordSetter = {
      numeral: chordNumeral,
      key: key
    };
    this.store.dispatch(new hitMeActions.CreateUserChord(chordSetter));
  }
}
