import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente.model';
import { ClienteService } from '../../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  cliente: Cliente = { id: 0, nombre: '', email: ''};
  isEdit = false;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const clienteId = this.route.snapshot.paramMap.get('id');
    if (clienteId) {
      this.isEdit = true;
      this.cargarCliente(parseInt(clienteId, 10));
    }
  }

  async cargarCliente(id: number) {
    try {
      this.cliente = await this.clienteService.getCliente(id);
    } catch (error) {
      console.error('Error al cargar cliente:', error);
    }
  }

  async guardarCliente() {
    try {
      if (this.isEdit) {
        await this.clienteService.updateCliente(this.cliente.id!, this.cliente);
      } else {
        await this.clienteService.createCliente(this.cliente);
      }
      this.router.navigate(['/clientes']);
    } catch (error) {
      console.error('Error al guardar cliente:', error);
    }
  }

  cancelar() {
    this.router.navigate(['/clientes']);
  }

}
