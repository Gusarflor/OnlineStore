import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-valor',
  templateUrl: './valor.component.html',
  styleUrls: ['./valor.component.css']
})
export class ValorComponent implements OnInit {

  @Input()valor:number = 0;
  @Input()mensaje:string='';


  constructor() { }

  ngOnInit(): void {
  }

}
