import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtratoComponent } from './extrato.component';


const routes: Routes = [{
  path: '',
  component: ExtratoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtratoRoutingModule { }
