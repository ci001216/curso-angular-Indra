import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(title: string) {
    return [
    'Aprende Angular 2 en 2 días',
    'Angular 2 para torpes',
    'Angular 2 para expertos'
    ];
  }

}
