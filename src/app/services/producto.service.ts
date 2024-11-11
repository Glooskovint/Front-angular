import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl = 'http://localhost:8080/api/productos';

  async getProductos(): Promise<Producto[]> {
    const response = await fetch(this.baseUrl);
    if (!response.ok) {
      throw new Error('Error al obtener productos');
    }
    return await response.json();
  }

  async getProducto(id: number): Promise<Producto> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener producto');
    }
    return await response.json();
  }

  async createProducto(producto: Producto): Promise<Producto> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    });
    if (!response.ok) {
      throw new Error('Error al crear producto');
    }
    return await response.json();
  }

  async updateProducto(id: number, producto: Producto): Promise<Producto> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    });
    if (!response.ok) {
      throw new Error('Error al actualizar producto');
    }
    return await response.json();
  }

  async deleteProducto(id: number): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Error al eliminar producto');
    }
  }
}
