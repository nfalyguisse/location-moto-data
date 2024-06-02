import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarquesComponent} from "./pages/marques/marques.component";

const routes: Routes = [
  {path:'marques', component:MarquesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
