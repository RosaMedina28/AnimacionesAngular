import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AnimacionComponent } from './componentes/animacion/animacion.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavComponent } from './componentes/nav/nav.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';

const routes: Routes = [
  {path: '', component: NavComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'formulario', component:FormularioComponent},
  {path: 'animaciones' , component: AnimacionComponent},
  {path: '**', component: NotfoundComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
