import { DataService } from './../../services/data.service';
import { NuevoService } from './../../services/nuevo.service';
import { producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  catalogo: producto[] = [];
  valor:number = 0;



  //Inyectamos en el constructor el servicio que hemos creado para la base de datos.
constructor(private NuevoService:NuevoService,) { }

  ngOnInit(): void {


    this.catalogo = this.NuevoService.getcatalogo();

    console.log(this.NuevoService.ObtenerCatalogo());



    this.getValor();
}


deleteProducto(item:producto){
  this.catalogo = this.catalogo
                  .filter(x => x.id != item.id);

  this.getValor();
}

toggleProducto(item:producto){
  this.getValor();
}

getValor(){
  this.valor = this.catalogo
                .filter(x => !x.disponible)
                .map(x => x.cantidad * x.precio)
                .reduce((acc, x) => acc += x, 0);

  }

}


