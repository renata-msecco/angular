import { Component, ViewChild, ElementRef } from '@angular/core';
import {  NgForm } from '@angular/forms';

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

  onSubmit(form){
    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.senha.markAsTouched();

      if (form.controls.email.invalid){
        this.emailInput.nativeElement.focus();
        return;
      }

      if (form.controls.senha.invalis){
        this.senhaInput.nativeElement.focus();
        return;
      }

      return;
  }

    console.log('email:', this.email);
    console.log('senha:', this.senha);

}
  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }
}
