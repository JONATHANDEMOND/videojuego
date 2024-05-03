import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { VideoJuegosComponent } from './pages/videojuegos/videojuegos.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesVideojuegosComponent } from './pages/detalles-videojuegos/detalles-videojuegos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'videojuegos', component:VideoJuegosComponent},
    { path: 'contactos', component:ContactosComponent},
    { path: 'videojuegos-detalles/:idvideojuegos', component: DetallesVideojuegosComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: Error404Component}
];
