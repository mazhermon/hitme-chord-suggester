import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { provideMockStore } from "@ngrx/store/testing";
import { Router, RouterEvent, NavigationEnd } from "@angular/router";
import { BehaviorSubject, ReplaySubject } from "rxjs";
describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let methodSpy: jasmine.Spy;

  const eventSubject = new ReplaySubject<RouterEvent>(1);
  const mockRouter = {
    navigate: jasmine.createSpy("navigate"),
    events: eventSubject.asObservable(),
    url: "songs"
  };

  beforeEach(async(() => {
    const initialState = { shell: { sideBarIsOpen: false } };

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: Router,
          useValue: mockRouter
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    methodSpy = spyOn(app, "onAnyRouteChange");
  });

  it("should create the app", async(() => {
    expect(app).toBeTruthy();
  }));

  // it("should toggle sidebarOpened with menu is opened", () => {
  //   // Arrange
  //   // app.sidebarOpened = false;
  //   // app.ngOnInit();
  //   // Act
  //   //app.onMenuToggle();
  //   // Asset
  //   // this is set via state, will need to come back to this one
  //   // expect(app.sidebarOpened).toBe(true);
  //   //onMenuToggle;
  // });

  // it("should call onAnyRouteChange on NavigationEnd", () => {
  //   // Arrange
  //   // Act
  //   eventSubject.next(new NavigationEnd(1, "songs", "songs"));
  //   // Assert
  //   //expect(methodSpy).toHaveBeenCalledTimes(1);
  //   // need to come back to this one
  // });
});
