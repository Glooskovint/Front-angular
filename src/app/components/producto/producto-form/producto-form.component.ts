import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../models/producto.model';
import { ProductoService } from '../../../services/producto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent {
  producto: Producto = { id: 0, nombre: '', categoria: '', precio: 0 };
  isEdit = false;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productoId = this.route.snapshot.paramMap.get('id');
    if (productoId) {
      this.isEdit = true;
      this.cargarProducto(parseInt(productoId, 10));
    }
  }

  async cargarProducto(id: number) {
    try {
      this.producto = await this.productoService.getProducto(id);
    } catch (error) {
      console.error('Error al cargar producto:', error);
    }
  }

  async guardarProducto() {
    try {
      if (this.isEdit) {
        await this.productoService.updateProducto(this.producto.id!, this.producto);
      } else {
        await this.productoService.createProducto(this.producto);
      }
      this.router.navigate(['/productos']);
    } catch (error) {
      console.error('Error al guardar producto:', error);
    }
  }

  cancelar() {
    this.router.navigate(['/productos']);
  }

}
