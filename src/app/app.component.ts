import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' Seja bem-vinda! =)';
  palavra = 'CARRO';
  favoriteColor = 'grey';

  constructor() {
    setTimeout(() => {
      this.title = ' Que bom que você está aqui!';
    }, 5000);

    }
    eventoRecebido($event){
      console.log('AppComponent: EVENTO RECEBIDO!', $event);
  }
}
