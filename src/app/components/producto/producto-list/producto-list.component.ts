import { Component } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto.model';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  async cargarProductos() {
    try {
      this.productos = await this.productoService.getProductos();
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  }

  editarProducto(id: number) {
    // Navegar al formulario de edición
    this.router.navigate([`/productos/editar/${id}`]);
  }

  async eliminarProducto(id: number) {
    try {
      await this.productoService.deleteProducto(id);
      this.cargarProductos();
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  }

  nuevoProducto() {
    // Navegar al formulario para crear un nuevo producto
    this.router.navigate([`/productos/nuevo`]);
  }

}
