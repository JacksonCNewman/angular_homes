/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {ApplicationConfig} from '@angular/core';
import routeConfig from "./routes";
import {provideRouter} from "@angular/router";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig)],
};
