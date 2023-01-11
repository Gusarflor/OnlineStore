import { producto } from './../models/producto';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class NuevoService {

  constructor(private dataService:DataService) { }

  ObtenerCatalogo(){
    this.dataService.cargarCatalogo().subscribe(misArticulos=>{
      console.log(misArticulos);
    });
  }

  catalogo:producto[] = [];

    //   {
    //     id:1,
    //     nombre: 'taladro',
    //     precio: 75,
    //     cantidad: 1,
    //     disponible: false,

    //   },

    //   {
    //     id: 2,
    //     nombre: 'martillo',
    //     precio: 5,
    //     cantidad: 3,
    //     disponible: false,
    //   },

    //   {
    //     id: 3,
    //     nombre: 'alicates',
    //     precio: 8.25,
    //     cantidad: 5,
    //     disponible: false,
    //   },

    //   {
    //     id: 4,
    //     nombre: 'grapadora',
    //     precio: 36.7,
    //     cantidad: 2,
    //     disponible: false,
    //   }
    // ];

  addProducto(producto:producto){
    this.catalogo.unshift(producto);
    this.dataService.AlmacenarArticulos(this.catalogo);
  }


  getcatalogo(){
    return this.catalogo;
  }



}
