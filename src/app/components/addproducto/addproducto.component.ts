import { Router } from '@angular/router';
import { NuevoService } from './../../services/nuevo.service';
import { producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproducto',
  templateUrl: './addproducto.component.html',
  styleUrls: ['./addproducto.component.css']
})
export class AddproductoComponent implements OnInit {

  id : number = 0;
  nombre : string = '';
  precio : number = 0;
  cantidad : number = 0;

  // Inyectamos en constructor el servicio que hemos creado: "nuevo".
  // También inyectamos a la variable "router" para enlazarlo con el componente cabecera.

  constructor( private NuevoService:NuevoService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new producto();
    item.id = this.id;
    item.nombre = this.nombre;
    item.precio = this.precio;
    item.cantidad = this.cantidad;
    item.disponible = false;

    this.NuevoService.addProducto(item);

    this.router.navigate(['/']);


  }

}
