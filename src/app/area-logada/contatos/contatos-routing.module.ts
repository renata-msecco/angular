import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalharContatoComponent } from './detalhar-contato/detalhar-contato.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';


const routes: Routes = [{
  path: '',
  component: ListarContatosComponent,
}, {
  path: 'novo',
  component: EditarContatoComponent,
}, {
  path: ':id',
  component: DetalharContatoComponent,
}, {
  path: ':id/editar',
  component: EditarContatoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
