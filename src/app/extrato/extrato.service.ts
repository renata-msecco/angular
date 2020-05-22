import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Transacao } from './extrato.interface';
// import { throwError, timer } from 'rxjs';
// import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getTransacoes(page: number) {
     // simulador de erro com operador RxJS
    // const error = throwError('Erro Genérico');
    // return timer(3000)
    // .pipe(
    //   mergeMap(() => error));
    // return throwError(new Error('Erro genérico'));
    // notação com template string.
    // return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`);
    return this.http.get<Transacao[]>(this.API_URL + '/transacoes', {
      params: {
        _page: String(page),
      }
    });
  }
}
