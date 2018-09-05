import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitmeComponent } from './hitme.component';

describe('HitmeComponent', () => {
  let component: HitmeComponent;
  let fixture: ComponentFixture<HitmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
