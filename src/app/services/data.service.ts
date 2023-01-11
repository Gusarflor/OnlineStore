import { producto } from './../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  setCatalogo(catalogo: producto[]) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpclient:HttpClient) { }

  //creamos método para obtener info de nuestro componente y llevarlos hacia la bbdd.

  cargarCatalogo(){
    return this.httpclient.get('https://nuevo-ecommerce-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
  }

  //creamos método para conectar con nuestra base de datos.

  AlmacenarArticulos(articulo:producto[]){
    this.httpclient.put('https://nuevo-ecommerce-default-rtdb.europe-west1.firebasedatabase.app/datos.json',articulo).subscribe(
      response=>console.log("se han almacenado los articulos" + response),
      error => console.log("error" + error),
    );
  }

}


