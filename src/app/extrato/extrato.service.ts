import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transacao } from './extrato.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getTransacoes() {
    return this.http.get<Transacao[]>(this.API_URL + '/transacoes');
    // return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`);
   // notação com template string.
  }
}
