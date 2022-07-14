import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/usuarios/agregar/agregar.component';
import { EditarComponent } from './pages/usuarios/editar/editar.component';
import { VistaComponent } from './pages/usuarios/vista/vista.component';

const routes: Routes = [
  {
  path: '',
  component: VistaComponent,
  pathMatch: 'full'
  },
  {
    path: 'agregar',
    component: AgregarComponent
  },
  {
    path: 'editar/:id',
    component: EditarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
