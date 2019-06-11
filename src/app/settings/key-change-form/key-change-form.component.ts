import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromSettings from '../state/settings.reducer';
import * as settingsActions from '../state/setting.actions';
import { Key } from 'src/app/models/key.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'hm-key-change-form',
  templateUrl: './key-change-form.component.html',
  styleUrls: ['./key-change-form.component.scss']
})
export class KeyChangeFormComponent implements OnInit, OnDestroy {

  public keysData: Array<Key>;
  public keyChangeForm: FormGroup;

  private destroyed$: Subject<void> = new Subject();

  constructor(
    private store: Store<fromSettings.State>
  ) { }

  ngOnInit() {
    this.setupKeysData();
    //this.setupKeyChangeForm();
  }

  setupKeysData(): void {
    this.store.dispatch(new settingsActions.GetMusicalKeysData());

    this.store.pipe(
      select(fromSettings.getKeysData),
      takeUntil(this.destroyed$),
    ).subscribe(keysData => this.keysData = keysData);
  }

  // setupKeyChangeForm(): void {
  //   this.keyChangeForm = new FormGroup({
  //     'keyNote': new FormControl('C'),
  //     'keyQuality': new FormControl('maj')

  //   });
  // }

  onQualityChange(e): void {
    console.log(e);
  }

  onKeyNoteChange(e): void {
    console.log('key note change?', e);
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

}
