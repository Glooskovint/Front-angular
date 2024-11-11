import { Component } from '@angular/core';
import { Venta } from '../../../models/venta.model';
import { VentaService } from '../../../services/venta.service';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venta-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './venta-list.component.html',
  styleUrl: './venta-list.component.css'
})
export class VentaListComponent {
  ventas: Venta[] = [];

  constructor(
    private ventaService: VentaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarVentas();
  }

  async cargarVentas() {
    try {
      this.ventas = await this.ventaService.getVentas();
    } catch (error) {
      console.error('Error al cargar ventas:', error);
    }
  }

  editarVenta(id: number) {
    // Navegar al formulario de edición
    this.router.navigate([`/ventas/editar/${id}`]);
  }

  async eliminarVenta(id: number) {
    try {
      await this.ventaService.deleteVenta(id);
      this.cargarVentas();
    } catch (error) {
      console.error('Error al eliminar venta:', error);
    }
  }

  nuevaVenta() {
    // Navegar al formulario para crear una nueva venta
    this.router.navigate([`/ventas/nueva`]);
  }

}
