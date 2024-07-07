import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { BusquedaProductosComponent } from './busqueda-productos/busqueda-productos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListaProductosComponent,
    CategoriasComponent,
    BusquedaProductosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ListaProductosComponent,
    CategoriasComponent,
    BusquedaProductosComponent
  ]
})
export class GaleriaProductosModule { }
