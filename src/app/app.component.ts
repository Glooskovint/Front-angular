import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SisFacturacionFrontend';

  constructor(private router: Router) { }

  clientes() {
    this.router.navigate(['/clientes']);
  }

  trabajadores() {
    this.router.navigate(['/trabajadores']);
  }

  productos() {
    this.router.navigate(['/productos']);
  }

  ventas() {
    this.router.navigate(['/ventas']);
  }

  salir() {
    // Lógica de salida (limpiar sesión, etc.)
    console.log('Usuario ha salido');
    this.router.navigate(['/']);
  }

}
