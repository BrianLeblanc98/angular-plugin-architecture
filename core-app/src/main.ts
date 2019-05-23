import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//declare const window;

//import * as angularCore from '@angular/core';
//import * as angularCommon from '@angular/common';
//import * as angularForms from '@angular/forms';

//window.System['@angular/core'] = angularCore;
//window.System['@angular/common'] = angularCommon;
//window.System['@angular/forms'] = angularForms;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
