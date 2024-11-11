import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../../../models/trabajador.model';
import { TrabajadorService } from '../../../services/trabajador.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trabajador-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trabajador-form.component.html',
  styleUrl: './trabajador-form.component.css'
})
export class TrabajadorFormComponent implements OnInit{
  trabajador: Trabajador = { id: 0, nombre: '', rol: '' };
  isEdit = false;

  constructor(
    private trabajadorService: TrabajadorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const trabajadorId = this.route.snapshot.paramMap.get('id');
    if (trabajadorId) {
      this.isEdit = true;
      this.cargarTrabajador(parseInt(trabajadorId, 10));
    }
  }

  async cargarTrabajador(id: number) {
    try {
      this.trabajador = await this.trabajadorService.getTrabajador(id);
    } catch (error) {
      console.error('Error al cargar trabajador:', error);
    }
  }

  async guardarTrabajador() {
    try {
      if (this.isEdit) {
        await this.trabajadorService.updateTrabajador(this.trabajador.id!, this.trabajador);
      } else {
        await this.trabajadorService.createTrabajador(this.trabajador);
      }
      this.router.navigate(['/trabajadores']);
    } catch (error) {
      console.error('Error al guardar trabajador:', error);
    }
  }

  cancelar() {
    this.router.navigate(['/trabajadores']);
  }

}
