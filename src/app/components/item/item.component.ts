import { producto } from './../../models/producto';
import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //Decoradores para establecer comunicación entre componente padre e hijo

  @Input() item:producto = new producto();

  @Output()deleteProducto: EventEmitter<producto> = new EventEmitter();

  @Output()toggleProducto: EventEmitter<producto> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item:producto){
    this.deleteProducto.emit(item);
  }

  onToggle(item:producto){
    item.disponible = !item.disponible;
    this.toggleProducto.emit(item);

  }

}
