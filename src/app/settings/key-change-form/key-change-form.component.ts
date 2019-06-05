import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hm-key-change-form',
  templateUrl: './key-change-form.component.html',
  styleUrls: ['./key-change-form.component.scss']
})
export class KeyChangeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // dispatch action to get keys data from state? listen in effects
    // listen for keysDataSuccess action in reducer
    // make a selecter to get keys data out of state
    // set local prop to keys data and use that to create options for select
  }

}
