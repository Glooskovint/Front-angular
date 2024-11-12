import { provideRouter, Routes } from '@angular/router';
import { TrabajadorListComponent } from './components/trabajador/trabajador-list/trabajador-list.component';
import { TrabajadorFormComponent } from './components/trabajador/trabajador-form/trabajador-form.component';
import { ProductoListComponent } from './components/producto/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/producto/producto-form/producto-form.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';
import { VentaListComponent } from './components/venta/venta-list/venta-list.component';
import { VentaFormComponent } from './components/venta/venta-form/venta-form.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [

    // Ruta para el logeo
    { path: "login", component: LoginComponent },
    {
        path: "", component: DashboardComponent, canActivate: [AuthGuard], children: [
            // Rutas para Trabajadores
            { path: 'trabajadores', component: TrabajadorListComponent, canActivate: [AuthGuard] },
            { path: 'trabajadores/nuevo', component: TrabajadorFormComponent, canActivate: [AuthGuard] },
            { path: 'trabajadores/editar/:id', component: TrabajadorFormComponent, canActivate: [AuthGuard] },

            // Rutas para Productos
            { path: 'productos', component: ProductoListComponent, canActivate: [AuthGuard] },
            { path: 'productos/nuevo', component: ProductoFormComponent, canActivate: [AuthGuard] },
            { path: 'productos/editar/:id', component: ProductoFormComponent, canActivate: [AuthGuard] },

            // Rutas para Clientes
            { path: 'clientes', component: ClienteListComponent, canActivate: [AuthGuard] },
            { path: 'clientes/nuevo', component: ClienteFormComponent, canActivate: [AuthGuard] },
            { path: 'clientes/editar/:id', component: ClienteFormComponent, canActivate: [AuthGuard] },

            // Rutas para Ventas
            { path: 'ventas', component: VentaListComponent, canActivate: [AuthGuard] },
            { path: 'ventas/nueva', component: VentaFormComponent, canActivate: [AuthGuard] },
            { path: 'ventas/editar/:id', component: VentaFormComponent, canActivate: [AuthGuard] },
        ]
    },

    // Redirección a login si no está autenticado
    { path: '**', redirectTo: '/login' }
];

export const appRouter = provideRouter(routes);