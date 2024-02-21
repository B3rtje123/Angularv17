import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <h1><button routerLink="/">Welcome to {{title}}!</button></h1>

    <router-outlet />
  `,
})
export class AppComponent {
  title = 'Angular v17 probeersels';
}