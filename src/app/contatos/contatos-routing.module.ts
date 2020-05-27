import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';


const routes: Routes = [{
  path: '',
  component: ListarContatosComponent,
}, {
  path: ':id',
  component: DetalhesContatoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
