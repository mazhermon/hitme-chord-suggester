// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCE_zAsvvbil6KcCkhnei7GVawseTJXHzU",
    authDomain: "hitme-chord-suggester.firebaseapp.com",
    databaseURL: "https://hitme-chord-suggester.firebaseio.com",
    projectId: "hitme-chord-suggester",
    storageBucket: "hitme-chord-suggester.appspot.com",
    messagingSenderId: "442466980095",
    appId: "1:442466980095:web:aef5944212153cc4783cca"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
