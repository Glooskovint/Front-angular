import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(public authService: AuthService, private router: Router) { }

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
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
