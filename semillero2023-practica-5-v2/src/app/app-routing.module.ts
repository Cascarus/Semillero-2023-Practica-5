import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CoberturasComponent } from './components/coberturas/coberturas.component';
import { AddCoberturaComponent } from './components/coberturas/add-cobertura/add-cobertura.component';
import { AddClienteComponent } from './components/clientes/add-cliente/add-cliente.component';
import { UpdateClienteComponent } from './components/clientes/update-cliente/update-cliente.component';
import { UpdateCoberturaComponent } from './components/coberturas/update-cobertura/update-cobertura.component';
import { PolizasComponent } from './components/polizas/polizas.component';
import { AddPolizaComponent } from './components/polizas/add-poliza/add-poliza.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent},
  { path:'clientes', component: ClientesComponent},
  { path:'clientes/new', component: AddClienteComponent},
  { path:'clientes/update/:id', component: UpdateClienteComponent},
  { path:'coberturas', component: CoberturasComponent},
  { path:'coberturas/new', component: AddCoberturaComponent},
  { path:'coberturas/update/:id', component: UpdateCoberturaComponent},
  { path:'polizas', component: PolizasComponent},
  { path:'polizas/new', component: AddPolizaComponent},
  { path:'coberturas/update/:id', component: UpdateCoberturaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
