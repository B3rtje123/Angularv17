import { Routes } from '@angular/router';
import { DogsListComponent } from './dogslist.component';
import { DogViewComponent } from './dog-view.component';

export const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: DogsListComponent},
    {path: 'details/:index', loadComponent:() => import('./dog-view.component').then(m => m.DogViewComponent)}
];
