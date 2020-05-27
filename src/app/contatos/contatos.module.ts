import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';


@NgModule({
  declarations: [
    ListarContatosComponent,
    DetalhesContatoComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
  ]
})
export class ContatosModule { }
