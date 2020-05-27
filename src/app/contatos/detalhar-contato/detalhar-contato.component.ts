import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatosService } from '../contatos.service';
import { Contato } from '../contatos.interface';
import { finalize, take } from 'rxjs/operators';

@Component({
  selector: 'app-detalhar-contato',
  templateUrl: './detalhar-contato.component.html',
  styleUrls: ['./detalhar-contato.component.scss']
})
export class DetalharContatoComponent implements OnInit {
  contato: Contato;
  estaCarregando: boolean;
  erroNoCarregamento: boolean;
  idContato: string;

  constructor(
    private route: ActivatedRoute,
    private contatosService: ContatosService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.carregarContato();
  }
  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;
    const idContato = this.route.snapshot.paramMap.get('id');
    this.contatosService.getContatoPorId(idContato)
    .pipe(
      take(1),
      finalize(() =>  this.estaCarregando = false)
     )

  .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error),
      );
  }

  onSuccess(response: Contato) {
    this.contato = response;
    console.log(this.contato);
  }

  onError(error: any){
    this.erroNoCarregamento = true;
    console.error(error);
  }

  voltar(){
    this.router.navigate(['contatos']);
  }
}
