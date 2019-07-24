import { Component, OnInit, Input, HostBinding, OnChanges } from '@angular/core';
import { buttonEnum } from './button.enum';

@Component({
  selector: '[hmButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {
  @HostBinding('class.hm-button--primary') public isPrimaryButton: boolean;
  @HostBinding('class.hm-button--tertiary') public isTertiaryButton: boolean;

  // lol using or string here defetes the purpose.
  @Input() public hmButton:buttonEnum | string;

  ngOnInit() {
    this.initialiseClasses();
  }

  ngOnChanges() {
    this.initialiseClasses();
  }

  public initialiseClasses(): void {
    this.isPrimaryButton = this.hmButton === buttonEnum[buttonEnum.primary];
    this.isTertiaryButton = this.hmButton === buttonEnum[buttonEnum.tertiary];
  }

}
