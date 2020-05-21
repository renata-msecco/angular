import { Component, OnInit } from '@angular/core';
import { ExtratoService } from './extrato.service';
import { Transacao } from './extrato.interface';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transacoes: Transacao[];

  constructor(
    private extratoService: ExtratoService
  ) { }

  ngOnInit() {
    this.extratoService.getTransacoes()
     .subscribe(response => {
      this.transacoes = response;
     });
  }

}
