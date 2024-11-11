import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../../services/trabajador.service';
import { Trabajador } from '../../../models/trabajador.model';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajador-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './trabajador-list.component.html',
  styleUrl: './trabajador-list.component.css'
})
export class TrabajadorListComponent implements OnInit {
  trabajadores: Trabajador[] = [];

  constructor(
    private trabajadorService: TrabajadorService,
    private router: Router
  ) {}

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
    // Navegamos al formulario de edición del trabajador, pasando el ID
    this.router.navigate([`/trabajadores/editar/${id}`]);
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
    //Navegamos a la página de creación de un nuevo trabajador
    this.router.navigate(['/trabajadores/nuevo']);
  }
}
