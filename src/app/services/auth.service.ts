import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    // Simulamos un login sencillo (esto debería ser una petición a un backend en un proyecto real)
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true'); // guardamos en localStorage para persistencia
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated'); // removemos el estado de autenticación
  }

  checkAuthStatus(): boolean {
    // Verificamos el estado de autenticación almacenado
    return localStorage.getItem('isAuthenticated') === 'true';
  }
}
