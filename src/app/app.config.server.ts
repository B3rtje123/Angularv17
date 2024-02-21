import { mergeApplicationConfig, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { withViewTransitions } from '@angular/router';

const serverConfig: ApplicationConfig = {
  providers: [
    // provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
