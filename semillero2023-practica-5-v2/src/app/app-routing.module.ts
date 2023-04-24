import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CoberturasComponent } from './components/coberturas/coberturas.component';
import { AddCoberturaComponent } from './components/coberturas/add-cobertura/add-cobertura.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent},
  { path:'clientes', component: ClientesComponent},
  { path:'coberturas', component: CoberturasComponent},
  { path:'coberturas/new', component: AddCoberturaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
