import { provideRouter, Routes } from '@angular/router';
import { TrabajadorListComponent } from './components/trabajador/trabajador-list/trabajador-list.component';

export const routes: Routes = [
    { path: 'trabajadores', component: TrabajadorListComponent },
    //{ path: 'trabajadores/nuevo', component: TrabajadorFormComponent },
    //{ path: 'trabajadores/editar/:id', component: TrabajadorFormComponent },
    { path: '', redirectTo: '/trabajadores', pathMatch: 'full' }  // Redirección inicial
];

export const appRouter = provideRouter(routes);