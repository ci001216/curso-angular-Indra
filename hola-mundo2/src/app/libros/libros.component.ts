import { Component, OnInit } from '@angular/core';
import { BooksService } from './../books/books.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
  })
export class LibrosComponent  {

  private books: string[] = [];
    constructor(private booksService: BooksService) { }
    search(title: string) {
    this.books = this.booksService.getBooks(title);
  }

}
