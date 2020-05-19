import { Component } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from './dados-exercicio-diretiva-constantes';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent{
  listaFrutas = [
    'Maça',
    'Pêra',
    'Melão',
    'Uva',
  ];
  listaCarros = [{
   placa: 'EXU-6666',
   cor: 'Preto',
   estado: 'São Paulo'
  }, {
    placa: 'EXU-6665',
    cor: 'Vermelho',
    estado: 'Rio de Janeiro'
   }, {
    placa: 'EXU-6664',
    cor: 'Roxo',
    estado:  'Minas Gerais'
   }, {
    placa: 'EXU-6663',
    cor: 'Branco',
    estado:  'Espirito Santo'

   }];

  deveExibir = false;
  CAMINHO_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images/';
  MEMES_AGRUPADOS_POR_CATEGORIAS = MEMES_AGRUPADOS_POR_CATEGORIA;
  trocarValor(){
    this.deveExibir = !this.deveExibir;
  }
soma(numero1, numero2){
  return numero1 + numero2;
}
}
