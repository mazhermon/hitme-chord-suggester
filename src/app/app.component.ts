import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './state/app.state';
import * as hitMeActions from './hitme/state/hitme.actions';
import { takeUntil } from 'rxjs/operators';
import * as appActions from './state/app.actions'
import * as fromAppState from './state/app.state';
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
			const isHome = e.url == '/';
			if(e instanceof NavigationEnd && !isHome) {
				this.onAnyRouteChange();
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
