import { Component } from '@angular/core';
import { VideojuegoService } from '../../services/videojuego.service';
import { IVideojuego } from '../../interfaces/videojuego';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  listaVideojuegos: IVideojuego[] = [];
  listaVideojuegosCategoria: IVideojuego[] = [];
  listaVideojuegosFiltrados: IVideojuego[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  nombreVideojuego: string = '';
  IDVideojuegoActual: number = 0;
  IDCategoriaActual: number = 0;

  constructor(private videojuegoService: VideojuegoService) {
    this.obtenerVideojuegos();
   }

  obtenerVideojuegos() {
    this.videojuegoService.getVideojuegos().subscribe({
      next: (data) => {
        this.listaVideojuegos = data;
        this.listaVideojuegosCategoria = [...this.listaVideojuegos]; // Clonar la lista original
        this.listaVideojuegosFiltrados = [...this.listaVideojuegosCategoria]; // Clonar la lista original
        this.isResultLoaded = true;
      }, error: (error) => {
        console.error(error);
      }
    });
  }

  onSearch(busqueda: string): void {
    if (busqueda.trim() !== '') {
      this.listaVideojuegosFiltrados = this.listaVideojuegosCategoria.filter((videojuego) => {
        return videojuego.nombre.toLowerCase().includes(busqueda.toLowerCase());
      });
    } else {
      this.listaVideojuegosFiltrados = [...this.listaVideojuegosCategoria]; // Restaurar la lista original
    }
  }

  filtrarPorCategoria(categoriaSeleccionada: number): void {
    console.log("categoriaSeleccionada", categoriaSeleccionada);
    this.IDCategoriaActual = categoriaSeleccionada;
    if (categoriaSeleccionada == 0) {
      this.listaVideojuegosCategoria = [...this.listaVideojuegos]; // Restaurar la lista original
      this.listaVideojuegosFiltrados = [...this.listaVideojuegosCategoria]; // Restaurar la lista original
    } else {
      this.listaVideojuegosCategoria = this.listaVideojuegos.filter((videojuego) => {
        return videojuego.categoriaId == categoriaSeleccionada;
      });
      this.listaVideojuegosFiltrados = [...this.listaVideojuegosCategoria]; // Restaurar la lista original
    }
  }

  

}