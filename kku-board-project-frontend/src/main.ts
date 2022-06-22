import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as firebase from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";
if (environment.production) {
  enableProdMode();
}
if (!firebase.getApps().length) firebase.initializeApp(environment.firebase);
else firebase.getApps(); // if already initialized, use that one

if (window.location.hostname === "localhost") {
    const authInstance = getAuth();
    connectAuthEmulator(authInstance, "http://localhost:9099");
    const storageInstance = getStorage();
    connectStorageEmulator(storageInstance, "localhost", 9199);
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
