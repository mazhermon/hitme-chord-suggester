import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Output() public closeSidebar = new EventEmitter();

  constructor() { }

  public onMenuToggle():void {
    this.closeSidebar.emit();
  }

}
