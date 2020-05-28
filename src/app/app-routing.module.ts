import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstaLogadoGuard } from 'src/app/shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from 'src/app/shared/guards/nao-esta-logado/nao-esta-logado.guard';
import { NaoEncontradoComponent } from 'src/app/nao-encontrado/nao-encontrado.component';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./area-logada/area-logada.module').then(m => m.AreaLogadaModule),
  canActivate: [EstaLogadoGuard],
}, {
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  canActivate: [NaoEstaLogadoGuard],
},  {
  path: '**',
  component: NaoEncontradoComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
