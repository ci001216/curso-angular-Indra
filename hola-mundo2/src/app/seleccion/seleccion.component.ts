import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})


export class SeleccionComponent implements OnInit {

  public provincias = [
    {idProvincia: 1, nombre: 'Castellon'},
    {idProvincia: 2, nombre: 'Alicante'},
    {idProvincia: 3, nombre: 'Valencia'},
    {idProvincia: 4, nombre: 'Murcia'},
    {idProvincia: 5, nombre: 'Almeria'}
  ];
  public provinciaSeleccionada = {idProvincia: '0', nombre: 'none'};

  public imprimir = false ;

  constructor() { }

  ngOnInit() {
  }

}
