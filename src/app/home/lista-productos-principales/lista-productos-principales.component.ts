import { Component } from '@angular/core';
import { VideojuegoService } from '../../services/videojuego.service';
import { IVideojuego } from '../../interfaces/videojuego';

@Component({
  selector: 'app-lista-productos-principales',
  templateUrl: './lista-productos-principales.component.html',
  styleUrl: './lista-productos-principales.component.css'
})
export class ListaProductosPrincipalesComponent {
  videojuegosPrincipales: IVideojuego[] = [];
  isResultLoaded = false;

  constructor(private videojuegosService: VideojuegoService){
    this.obtenerVideojuegosPrincipales();
  }

  obtenerVideojuegosPrincipales() {
    this.videojuegosService.getVideojuegos().subscribe({
      next: (data) => {
        this.videojuegosPrincipales = data.filter((videojuego) => {
          return videojuego.precio >= 9.99 && videojuego.precio <= 19.99;
        });
        this.isResultLoaded = true;
      }, error: (error) => {
        console.error(error);
      }
    });
  }


}
