import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent  {

  @Input()
  ptitulo;

  @Output()
  hidden = new EventEmitter<boolean>();

  visible = true;

  click () {
    this.visible = !this.visible;
    this.hidden.emit(this.visible);
  }
}
