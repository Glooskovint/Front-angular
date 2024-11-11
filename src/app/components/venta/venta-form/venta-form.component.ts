import { Component } from '@angular/core';
import { Venta } from '../../../models/venta.model';
import { Cliente } from '../../../models/cliente.model';
import { Producto } from '../../../models/producto.model';
import { Trabajador } from '../../../models/trabajador.model';
import { VentaService } from '../../../services/venta.service';
import { ClienteService } from '../../../services/cliente.service';
import { ProductoService } from '../../../services/producto.service';
import { TrabajadorService } from '../../../services/trabajador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-venta-form',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './venta-form.component.html',
  styleUrl: './venta-form.component.css'
})
export class VentaFormComponent {
  venta: Venta = { 
    id: 0, 
    cliente: { id: 0, nombre: '', email: '' }, 
    producto: { id: 0, nombre: '', precio: 0, categoria: '' }, 
    trabajador: { id: 0, nombre: '', rol: '' },
    cantidad: 0,
    fecha: new Date()
  };
  clientes: Cliente[] = [];
  productos: Producto[] = [];
  trabajadores: Trabajador[] = [];
  isEdit = false;

  constructor(
    private ventaService: VentaService,
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private trabajadorService: TrabajadorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarEntidades();

    const ventaId = this.route.snapshot.paramMap.get('id');
    if (ventaId) {
      this.isEdit = true;
      this.cargarVenta(parseInt(ventaId, 10));
    }
  }

  async cargarEntidades() {
    try {
      this.clientes = await this.clienteService.getClientes();
      this.productos = await this.productoService.getProductos();
      this.trabajadores = await this.trabajadorService.getTrabajadores();
    } catch (error) {
      console.error('Error al cargar entidades:', error);
    }
  }

  async cargarVenta(id: number) {
    try {
      this.venta = await this.ventaService.getVenta(id);
    } catch (error) {
      console.error('Error al cargar venta:', error);
    }
  }

  async guardarVenta() {
    try {
      if (this.isEdit) {
        await this.ventaService.updateVenta(this.venta.id!, this.venta);
      } else {
        await this.ventaService.createVenta(this.venta);
      }
      this.router.navigate(['/ventas']);
    } catch (error) {
      console.error('Error al guardar venta:', error);
    }
  }

  cancelar() {
    this.router.navigate(['/ventas']);
  }

}
