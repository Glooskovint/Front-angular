import { Injectable } from '@angular/core';
import { Trabajador } from '../models/trabajador.model';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  private baseUrl = 'http://localhost:8080/api/trabajadores';

  // Obtener todos los trabajadores
  async getTrabajadores(): Promise<Trabajador[]> {
    const response = await fetch(this.baseUrl);
    if (!response.ok) {
      throw new Error('Error al obtener trabajadores');
    }
    return await response.json();
  }

  // Obtener un trabajador por ID
  async getTrabajador(id: number): Promise<Trabajador> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener trabajador');
    }
    return await response.json();
  }

  // Crear un nuevo trabajador
  async createTrabajador(trabajador: Trabajador): Promise<Trabajador> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trabajador)
    });
    if (!response.ok) {
      throw new Error('Error al crear trabajador');
    }
    return await response.json();
  }

  // Actualizar un trabajador
  async updateTrabajador(id: number, trabajador: Trabajador): Promise<Trabajador> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trabajador)
    });
    if (!response.ok) {
      throw new Error('Error al actualizar trabajador');
    }
    return await response.json();
  }

  // Eliminar un trabajador
  async deleteTrabajador(id: number): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Error al eliminar trabajador');
    }
  }

}
