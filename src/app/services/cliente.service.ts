import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080/api/clientes';

  async getClientes(): Promise<Cliente[]> {
    const response = await fetch(this.baseUrl);
    if (!response.ok) {
      throw new Error('Error al obtener clientes');
    }
    return await response.json();
  }

  async getCliente(id: number): Promise<Cliente> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener cliente');
    }
    return await response.json();
  }

  async createCliente(cliente: Cliente): Promise<Cliente> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    });
    if (!response.ok) {
      throw new Error('Error al crear cliente');
    }
    return await response.json();
  }

  async updateCliente(id: number, cliente: Cliente): Promise<Cliente> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    });
    if (!response.ok) {
      throw new Error('Error al actualizar cliente');
    }
    return await response.json();
  }

  async deleteCliente(id: number): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Error al eliminar cliente');
    }
  }

}
