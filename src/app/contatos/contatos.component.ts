import { Component, OnInit } from '@angular/core';
import { ContatosService } from './contatos.service';
import { Contato } from './contatos.interface';
import { take, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {
  contato: Contato[];
  estaCarregando: boolean;
  erroNoCarregamento: boolean;
  contatos: Contato[];

  constructor(
    private contatosService: ContatosService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.carregarContatos();
  }
  carregarContatos() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;
    
    this.contatosService.getContatos()
      
    .pipe(
      take(1),
      finalize(() =>  this.estaCarregando = false)
     )

    .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
        )
  }
  onSuccess(response: Contato[]) {
    this.contatos = response;
  }

  onError(error: any){
    this.erroNoCarregamento = true;
    console.error(error);
  }
  irParaDetalhes(idContato: string){
    this.router.navigate(['contatos/' + idContato]);
  }
}
