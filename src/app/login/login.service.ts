import { Injectable } from '@angular/core';
import { of, throwError, timer, Observable } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth/auth.service';

import { LoginResponse } from 'src/app/login/login.interface';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
    ) {}

  logar(email: string, senha: string): Observable<LoginResponse> {
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
      })

      .pipe(
        delay(2000),
        tap(response => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
        })
      );
  }


    return timer(3000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos.'))
    );
  }
}
