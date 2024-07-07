import { Component, EventEmitter, Output } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { ICategoria } from '../../interfaces/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  listaCategoria: ICategoria[] = [];
  isResultLoaded = false;
  @Output() categoriaSeleccionada = new EventEmitter<number>();

  constructor(private categoriaService: CategoriaService) {
      this.obtenerCategorias();
   }

   obtenerCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: (data) =>{
        this.listaCategoria = data;
        this.isResultLoaded = true;
      }, error: (error) => {
        console.error("checar error")
        console.error(error);
      }
    });

  }

  filtrarPorCategoria(categoriaId: number): void {
    console.log("categoriaId", categoriaId);
    this.categoriaSeleccionada.emit(categoriaId);
  }

}
