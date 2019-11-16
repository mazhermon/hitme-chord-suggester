import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './state/app.state';
import * as hitMeActions from './hitme/state/hitme.actions';
import * as fromHitMe from './hitme/state/hitme.reducer';
import { map } from 'rxjs/operators';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	// could move this to state if needing more control later 🤔
	public sidebarOpened = false;

	constructor(private store: Store<State>) {}

	ngOnInit() {
		this.store.dispatch(new hitMeActions.LoadSongs());
	}

	onMenuToggle() {
		this.sidebarOpened = !this.sidebarOpened;
	}
}
