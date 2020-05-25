import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from './contatos.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    ){ }

  getContatos() {
    return this.http.get<Contato[]>(this.API_URL + '/contatos');
  }

  getContatoPorId(id: string) {
    return this.http.get<Contato>(this.API_URL + '/contatos/' + id);
  }
}
