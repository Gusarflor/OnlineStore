import { AddproductoComponent } from './components/addproducto/addproducto.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  { path: '', component: CatalogoComponent },
  { path: 'add', component: AddproductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
