import { Trabajador } from './trabajador.model';
import { Producto } from './producto.model';
import { Cliente } from './cliente.model';

export interface Venta {
  id: number;
  trabajador: Trabajador;
  producto: Producto;
  cliente: Cliente;
  fecha: Date;
}
