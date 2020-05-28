import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalharContatoComponent } from './detalhar-contato/detalhar-contato.component';


@NgModule({
  declarations: [
    ListarContatosComponent,
    DetalharContatoComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
  ]
})
export class ContatosModule { }
