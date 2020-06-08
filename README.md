# Welcome to the Hitme chord suggester

A tool to make [modal interchange](https://en.wikipedia.org/wiki/Borrowed_chord) (one type of chord borrowing) a bit more fun and easy, or just to easily see which chords are in a certain key.

https://hitme.mazhermon.com/

Hitme is a pet project I use for general learning and to help me with my music hobby. Hitme is a music theory tool to help to identify more interesting chords you could use in your chord progressions. The original intention was just a quick reference, but I'll be adding the missing CRUD functinality soon as I'd find that useful.

## How it works
Using the [nashville numbering system](https://en.wikipedia.org/wiki/Nashville_Number_System), you enter a chord progression, like a II V I for instance, or a I IV V etc. This will give you the basic chords you'll need. Then hit 'suggest' to swap some of these chords out for chords borrowed from other modes. You can then try some of these out on your instrument and use the ones you like to help write your chord progressions.

You'll see the names of the mode the chord has come from to help you understand how it's working.

It's a simple tool that I find useful. Just for fun and very early days so far.


## Fun things used in here so far
* Currently on Angular 9
* CSS Grid
* CSS custom properties
* SCSS / SASS
* A start on A11y conciderations (plenty of work to be done though)
* Angular animations
* SVG
* Angular material and Custom UI controls as appropriate
* local storage
* NGRX state management
* RXJS observables
* Typescript
* 
* ...

## Upcoming changes
* CRUD options 
* Firebase integration for better saving
* Further a11y conciderations
* Auth
* Chord reordering
* ...

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
