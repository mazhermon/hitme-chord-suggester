import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyChangeFormComponent } from './key-change-form.component';

describe('KeyChangeFormComponent', () => {
  let component: KeyChangeFormComponent;
  let fixture: ComponentFixture<KeyChangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyChangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
