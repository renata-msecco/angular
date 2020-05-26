import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logar(email: string, senha: string) {
    // return this.http.post(this.API_URL + '/auth', contato, this.httpOptions);
    // quando tiver uma api real, ela chamará os dados;

    if (email === 'renata.secco@gmail.com' && senha === '123456') {
      return of({
        usuario: {
          nome: 'Renata',
          sobrenome: 'Secco',
          email: 'renata.secco@gmail.com',
        },
        token: 'bA28082008rney',
      }).pipe(
        delay(2000)
      );
    }

    return timer(3000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos.'))
    );
  }
}
