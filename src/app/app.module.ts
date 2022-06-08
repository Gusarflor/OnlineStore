import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ItemComponent } from './components/item/item.component';
import { ValorComponent } from './components/valor/valor.component';
import { AddproductoComponent } from './components/addproducto/addproducto.component';
import { FormsModule } from '@angular/forms';
import { NuevoService } from './services/nuevo.service';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CatalogoComponent,
    ItemComponent,
    ValorComponent,
    AddproductoComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [NuevoService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
