import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalharContatoComponent } from './detalhar-contato/detalhar-contato.component';


const routes: Routes = [{
  path: '',
  component: ListarContatosComponent,
}, {
  path: ':id',
  component: DetalharContatoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
