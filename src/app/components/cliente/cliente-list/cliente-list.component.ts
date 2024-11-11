import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente.model';
import { ClienteService } from '../../../services/cliente.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css'
})
export class ClienteListComponent {
  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  async cargarClientes() {
    try {
      this.clientes = await this.clienteService.getClientes();
    } catch (error) {
      console.error('Error al cargar clientes:', error);
    }
  }

  editarCliente(id: number) {
    // Navegar al formulario de edición
    this.router.navigate([`/clientes/editar/${id}`]);
  }

  async eliminarCliente(id: number) {
    try {
      await this.clienteService.deleteCliente(id);
      this.cargarClientes();
    } catch (error) {
      console.error('Error al eliminar cliente:', error);
    }
  }

  nuevoCliente() {
    // Navegar al formulario para crear un nuevo cliente
    this.router.navigate([`/clientes/nuevo`]);
  }

}
