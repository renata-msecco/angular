import { Component, ViewChild, ElementRef } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import {  } from 'rxjs/operators';

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

  constructor(
    private loginService: LoginService,
  ){}


  onSubmit(form){
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
  this.loginService.logar(this.email, this.senha)
  .subscribe(
    response => {
      console.log('Sucesso!');
    },
    error => {
      console.log('Deu Ruim!');
    }
    );

}
  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }
}
