import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromSettings from '../state/settings.reducer';
import * as settingsActions from '../state/setting.actions';
import { Key } from 'src/app/models/key.model';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { KeyCentre } from '../state/settings.reducer';

@Component({
  selector: 'hm-key-change-form',
  templateUrl: './key-change-form.component.html',
  styleUrls: ['./key-change-form.component.scss']
})
export class KeyChangeFormComponent implements OnInit, OnDestroy {

  public keysData: Array<Key>;
  public keysDataNotes: Array<string>;
  public keyChangeForm: FormGroup;
  public currentGlobalKey: KeyCentre;

  private destroyed$: Subject<void> = new Subject();

  constructor(
    private store: Store<fromSettings.State>
  ) { }

  ngOnInit() {
    this.setupKeyInfo();
  }

  setupKeyInfo(): void {
    this.setupKeysData();
    this.setupCurrentGlobalKey();
  }

  setupKeysData(): void {
    this.store.dispatch(new settingsActions.GetMusicalKeysData());

    this.store.pipe(
      select(fromSettings.getKeysData),
      takeUntil(this.destroyed$),
    ).subscribe(keysData => {
      this.keysData = keysData;
      this.keysDataNotes = keysData.map(key => key.name);
      this.keysDataNotes = Array.from(new Set(this.keysDataNotes));
    })
  }

  setupCurrentGlobalKey(): void {
    this.store.pipe(
      select(fromSettings.getGlobalKeyCenter),
      takeUntil(this.destroyed$)
    ).subscribe(globalKey => this.currentGlobalKey = globalKey);
  }

  onQualityChange(e): void {
    // could get the new scale here before dispatching the action with 
    // the new scale included
    // let keyToSend: KeyCentre = {
    //   name: this.currentGlobalKey.name,
    //   quality: e.value,
    //   scale: ['pending']
    // }
    this.store.dispatch(new settingsActions.UpdateGobalKeyQuality(e.value))
    // could dispatch another action here to update the global scale?

    // could just send quality and then get the effect to also get new scale
  }

  onKeyNoteChange(noteName): void {
    // let keyToSend: KeyCentre = {
    //   name: noteName,
    //   quality: this.currentGlobalKey.quality,
    //   scale: this.currentGlobalKey.scale
    // }
    this.store.dispatch(new settingsActions.UpdateGobalKeyNote(noteName))
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

}
