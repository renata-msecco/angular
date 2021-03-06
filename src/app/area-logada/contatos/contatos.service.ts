import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contato } from './contatos.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }

  getContatos() {
    return this.http.get<Contato[]>(this.API_URL + '/contatos');
  }

  getContatoPorId(id: string) {
    return this.http.get<Contato>(this.API_URL + '/contatos/' + id);
  }

  createContato(contato: Contato) {
    return this.http.post<Contato[]>(this.API_URL + '/contatos', contato);
  }

  updateContato(id: string, contato: Contato) {
    return this.http.put<Contato>(this.API_URL + '/contatos/' + id, contato);
  }

  deleteContato(id: string) {
    return this.http.delete<Contato[]>(this.API_URL + '/contatos/' + id);
  }

}
