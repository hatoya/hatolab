/// <reference path="../typings/index.d.ts" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HatoModule } from './hato.modules';

const platform = platformBrowserDynamic();
platform.bootstrapModule(HatoModule);