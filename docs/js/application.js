/// <reference path="../typings/index.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var hato_modules_1 = require('./hato.modules');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(hato_modules_1.HatoModule);
