import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './state/app.reducer';
import * as hitMeActions from './hitme/state/hitme.actions';
import { takeUntil } from 'rxjs/operators';
import * as appActions from './state/app.actions'
import * as fromAppState from './state/app.reducer';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {

	private destroyed$ = new Subject();
	private _firstLoad = true;
	public sidebarOpened: boolean;
	
	constructor(
		private store: Store<State>,
		private router: Router
	) { }

	ngOnInit() {
		this.store.dispatch(new hitMeActions.LoadSongs());
		this.store.pipe(
			takeUntil(this.destroyed$),
			select(fromAppState.getSideBarIsOpen)
		).subscribe(sidebarOpened => this.sidebarOpened = sidebarOpened);

		this.router.events.pipe(
			takeUntil(this.destroyed$)
		).subscribe( (e:RouterEvent) => {
			if(e instanceof NavigationEnd && !this._firstLoad) {
				this.onAnyRouteChange();
			}

			if(e instanceof NavigationEnd && this._firstLoad) {
				this._firstLoad = false;
			}
		})
	}

	private _toggleSideBar() {
		this.store.dispatch(new appActions.ToggleSideBar());
	}

	onMenuToggle() {
		this._toggleSideBar();
	}

	onAnyRouteChange() {
		this._toggleSideBar();
	}

	ngOnDestroy() {
		this.destroyed$.next()
	}
}
