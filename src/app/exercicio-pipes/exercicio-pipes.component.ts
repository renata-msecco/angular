import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent {

  filme = {
    titulo: 'Um sonho de liberdade',
    avaliacao: 4.989898,
    precoAluguel: 5.50,
    dataLantamento: new Date(1994, 5, 30),
  };
}
