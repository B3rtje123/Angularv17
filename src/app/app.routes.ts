import { Routes } from '@angular/router';
import { DogsListComponent } from './Views/dogslist.component';
import { DogViewComponent } from './Views/detail/dog-view.component';

export const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', loadComponent:() => import('./Views/dogslist.component').then(m => m.DogsListComponent)},
    {path: 'details/:index', loadComponent:() => import('./Views/detail/dog-view.component').then(m => m.DogViewComponent)}
];
// use this piece of coding to lazy load the routing of the DogViewComponent
// loadComponent:() => import('./Views/detail/dog-view.component').then(m => m.DogViewComponent)  loadComponent:() => import('./Views/dogslist.component').then(m => m.DogsListComponent)