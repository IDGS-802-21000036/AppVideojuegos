import { Routes } from '@angular/router';
import { ListaProductosPrincipalesComponent } from './home/lista-productos-principales/lista-productos-principales.component';
import { ListaProductosComponent } from './galeria-productos/lista-productos/lista-productos.component';
import { InfoComponent } from './contacto/info/info.component';

export const routes: Routes = [
    {
        path: 'home',
        component: ListaProductosPrincipalesComponent

    },
    {
        path: 'videojuegos',
        component: ListaProductosComponent
    },
    {
        path: 'contacto',
        component: InfoComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
