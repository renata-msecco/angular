import { Component, ViewChild, ElementRef } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('senhaInput') senhaInput: ElementRef;

  email: string;
  senha: string;

  estaCarregando: boolean;
  erroNoLogin: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ){}


  onSubmit(form){
    this.erroNoLogin = false;

    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.senha.markAsTouched();

      if (form.controls.email.invalid){
        this.emailInput.nativeElement.focus();
        return;
      }

      if (form.controls.senha.invalid){
        this.senhaInput.nativeElement.focus();
        return;
      }

      return;
  }

    this.login();

}

login(){
  this.estaCarregando = true;
  this.loginService.logar(this.email, this.senha)
  .pipe(
    finalize(() => this.estaCarregando = false)
  )
    .subscribe(
      response => this.onSuccessLogin(),
      error => this.onErrorLogin(),
    );

}

onSuccessLogin(){
  this.router.navigate(['home']);
}

onErrorLogin(){
  this.erroNoLogin = true;
}
  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }
}
