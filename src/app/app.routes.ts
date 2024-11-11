import { provideRouter, Routes } from '@angular/router';
import { TrabajadorListComponent } from './components/trabajador/trabajador-list/trabajador-list.component';
import { TrabajadorFormComponent } from './components/trabajador/trabajador-form/trabajador-form.component';
import { ProductoListComponent } from './components/producto/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/producto/producto-form/producto-form.component';

export const routes: Routes = [
    // Rutas para Trabajadores
    { path: 'trabajadores', component: TrabajadorListComponent },
    { path: 'trabajadores/nuevo', component: TrabajadorFormComponent },
    { path: 'trabajadores/editar/:id', component: TrabajadorFormComponent },

    // Rutas para Productos
    { path: 'productos', component: ProductoListComponent },
    { path: 'productos/nuevo', component: ProductoFormComponent },
    { path: 'productos/editar/:id', component: ProductoFormComponent },

    // Redirección inicial
    { path: '', redirectTo: '/trabajadores', pathMatch: 'full' }
];

export const appRouter = provideRouter(routes);