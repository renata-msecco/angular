import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './home/app-routing.module';
import { ExtratoComponent } from './extrato/extrato.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { SharedModule } from './shared/shared.module';
import { ContatosComponent } from './contatos/contatos.component';
import { DetalhesContatoComponent } from './contatos/detalhes-contato/detalhes-contato.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ExtratoComponent,
    NaoEncontradoComponent,
    ContatosComponent,
    DetalhesContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
