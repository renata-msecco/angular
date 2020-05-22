import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from './home.component';
import { ExtratoComponent } from '../extrato/extrato.component';
import { NaoEncontradoComponent } from '../nao-encontrado/nao-encontrado.component';
import { ContatosComponent } from '../contatos/contatos.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},{
  path: 'contatos',
  component: ContatosComponent,
}, {
  path: 'login',
  component: LoginComponent,
}, {
  path: 'extrato',
  component: ExtratoComponent,
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '**',
  component: NaoEncontradoComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }