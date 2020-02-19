import { Component } from '@angular/core';
import * as appActions from '../../state/app.actions';
import { Store } from '@ngrx/store';
import * as fromAppState from 'src/app/state/app.reducer';

@Component({
  selector: 'hm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    public store: Store<fromAppState.State>
  ) { }

  public onMenuToggle(): void {
    this.store.dispatch(new appActions.ToggleSideBar())
  }
}
