import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ListaProductosPrincipalesComponent } from './lista-productos-principales/lista-productos-principales.component';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListaProductosPrincipalesComponent,
    BannerComponent
  ],
  imports: [
    CommonModule, HttpClientModule, RouterLink
  ],
  exports: [
    ListaProductosPrincipalesComponent,
    BannerComponent
  ]
})
export class HomeModule { }
