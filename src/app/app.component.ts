import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1><a href="/">Welcome to {{title}}!</a></h1>

    <router-outlet />
  `,
})
export class AppComponent {
  title = 'Angular v17 probeersels';
}