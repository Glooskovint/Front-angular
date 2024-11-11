import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appRouter } from './app/app.routes';

bootstrapApplication(AppComponent, {providers: [appRouter]})
  .catch((err) => console.error(err));