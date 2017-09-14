import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from './item';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {

  public tarea: string;
  public aTareas;

  constructor() {
  }

  ngOnInit() {
    this.tarea = '';
    this.aTareas = []; }

  addTarea () {
    this.aTareas.push(this.tarea);
    this.tarea = '';
  }
}
