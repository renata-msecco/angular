import { Component} from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio-pipes-localeid',
  templateUrl: './exercicio-pipes-localeid.component.html',
  styleUrls: ['./exercicio-pipes-localeid.component.scss'],
  providers: [
    DecimalPipe
  ]
})
export class ExercicioPipesLocaleidComponent {
constructor(
  private decimalPipe: DecimalPipe
){}
  compras = [{
    produto: 'lâmpadas',
    valor: 299.29,
    peso: 0,
    quantidade: 2,
    data: new Date (2020, 1, 1, 15, 20),
  }, {
    produto: 'farinha',
    valor: 450.29,
    peso: 29.33333,
    quantidade: 2,
    data: new Date (2020, 1, 10, 19, 30),
  } ];

  getPesoFormatado(peso: number) {
    if (peso <= 0) {
      return 'sem peso';
}
    return this.decimalPipe.transform(peso, '1.1-2') + 'Kg';
  }
}
