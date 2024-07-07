import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVideojuego } from '../interfaces/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {
  private endpoint: string = environment.endpoint;
  private apiUrl: string = this.endpoint + 'Videojuegos/';
  constructor(private http: HttpClient) { }

  // Método que obtiene todos los videojuegos
  getVideojuegos(): Observable<IVideojuego[]> {
    // imprimo en consola el endpoint y el apiUrl
    console.log(this.endpoint + this.apiUrl);
    return this.http.get<IVideojuego[]>(this.apiUrl);
  }

  // Método que agrega un videojuego
  addVideojuego(videojuego: IVideojuego): Observable<IVideojuego> {
    return this.http.post<IVideojuego>((this.apiUrl), videojuego);
  }


}
