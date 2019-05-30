import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	// could move this to state if needing more control later 🤔
	public sidebarOpened = false;

	onMenuToggle() {
		this.sidebarOpened = !this.sidebarOpened;
	}
}
