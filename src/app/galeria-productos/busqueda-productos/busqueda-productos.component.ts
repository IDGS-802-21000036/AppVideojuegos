import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-busqueda-productos',
  templateUrl: './busqueda-productos.component.html',
  styleUrl: './busqueda-productos.component.css'
})
export class BusquedaProductosComponent {
  busquedaTxt: string = '';

  constructor() { }

  @Output() busqueda: EventEmitter<string> = new EventEmitter<string>();

  onSearch(){
    this.busqueda.emit(this.busquedaTxt);
  }
}
