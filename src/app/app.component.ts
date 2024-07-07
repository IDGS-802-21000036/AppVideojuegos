import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CompartidoModule } from './compartido/compartido.module';
import { HomeModule } from './home/home.module';
import { GaleriaProductosModule } from './galeria-productos/galeria-productos.module';
import { ContactoModule } from './contacto/contacto.module';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { VideojuegoService } from './services/videojuego.service';
import { CategoriaService } from './services/categoria.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink,
    CompartidoModule, 
    HttpClientModule, 
    NgFor,
    NgIf, 
    HomeModule, 
    GaleriaProductosModule, 
    ContactoModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppVideojuegos';
}
