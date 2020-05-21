import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transacao } from './extrato.interface';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor(
    private http: HttpClient
  ) { }

  getTransacoes() {
    return this.http.get<Transacao[]>('https://my-json-server.typicode.com/renata-msecco/myapi/transacoes');
  }
}
