import { Component } from '@angular/core';
import { PieComponent } from './pie/pie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2';
  empresa = 'Indra ISL';
}
