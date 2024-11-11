import { Injectable } from '@angular/core';
import { Venta } from '../models/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private baseUrl = 'http://localhost:8080/api/ventas';

  async getVentas(): Promise<Venta[]> {
    const response = await fetch(this.baseUrl);
    if (!response.ok) {
      throw new Error('Error al obtener ventas');
    }
    return await response.json();
  }

  async getVenta(id: number): Promise<Venta> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener venta');
    }
    return await response.json();
  }

  async createVenta(venta: Venta): Promise<Venta> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(venta)
    });
    if (!response.ok) {
      throw new Error('Error al crear venta');
    }
    return await response.json();
  }

  async updateVenta(id: number, venta: Venta): Promise<Venta> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(venta)
    });
    if (!response.ok) {
      throw new Error('Error al actualizar venta');
    }
    return await response.json();
  }

  async deleteVenta(id: number): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Error al eliminar venta');
    }
  }

}
