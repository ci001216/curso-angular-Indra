import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public hijoTitle: string;

  constructor() { }

  ngOnInit() {
    this.hijoTitle = 'Componente Hijo';
  }

}
