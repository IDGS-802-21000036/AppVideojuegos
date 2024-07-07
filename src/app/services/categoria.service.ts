import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private endpoint: string = environment.endpoint;
  private apiUrl: string = this.endpoint + 'Categorias/';
  constructor(private http: HttpClient) { }

  // Método que obtiene todas las categorías
  public getCategorias(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(this.apiUrl);
  }
}
