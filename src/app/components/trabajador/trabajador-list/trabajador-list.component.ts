import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../../services/trabajador.service';
import { Trabajador } from '../../../models/trabajador.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-trabajador-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './trabajador-list.component.html',
  styleUrl: './trabajador-list.component.css'
})
export class TrabajadorListComponent implements OnInit {
  trabajadores: Trabajador[] = [];

  constructor(private trabajadorService: TrabajadorService) {}

  ngOnInit(): void {
    this.cargarTrabajadores();
  }

  async cargarTrabajadores() {
    try {
      this.trabajadores = await this.trabajadorService.getTrabajadores();
    } catch (error) {
      console.error('Error al cargar trabajadores:', error);
    }
  }

  editarTrabajador(id: number) {
    // Navegar al formulario de edición (esto se configurará en el enrutador)
  }

  async eliminarTrabajador(id: number) {
    try {
      await this.trabajadorService.deleteTrabajador(id);
      this.cargarTrabajadores();
    } catch (error) {
      console.error('Error al eliminar trabajador:', error);
    }
  }

  nuevoTrabajador() {
    // Navegar al formulario para crear un nuevo trabajador
  }
}
