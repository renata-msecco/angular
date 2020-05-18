import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent {

@Input() palavra: string;
@Input() color: string;
@Output() clicado = new EventEmitter();

imageURL = 'https://www.petz.com.br/blog/wp-content/uploads/2019/04/quantos-anos-vive-um-gatinho.jpg';
initialValue = 'Valor Inicial';
isDisable = true;
accessibilityText = 'Um texto acessivel';

valorDoInput = '';

valorContador = 10;

constructor() {
// setTimeout(() => {
//   this.isDisable = false;
//   console.log('isDisabled:', this.isDisable);
// }, 3000);
}

  onClick($event){
    console.log('clicou!', $event);
  }

  digitouAlgo($event){
  this.valorDoInput = $event.target.value;
    console.log($event);
  }
 
  passouMouse(){
    console.log('alguém passou mouse');

  }
  onClickBtnEmissor($event){
    console.log('emitindo informações para o componente pai!');
    this.clicado.emit($event);
  }
  
}
