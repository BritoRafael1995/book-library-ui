import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';
import { Book } from './models/Book';
import { SearchFilter } from './models/searchFilter';
import { EnumSearchParameter } from './enums/enumSearchParameter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  books: Book[] = [];
  filter: SearchFilter = {
    parameter: EnumSearchParameter.Title,
    value: ""
  };

constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.search();
  }
  search() {
    this.bookService.search({parameter: +this.filter.parameter, value: this.filter.value}).subscribe((result) => {this.books = result;});
  }

  getAuthors(authors: string[]){
    return authors.join(", ");
  }

  getAvailableCopies(totalCopies: number, copiesInUse: number){
    return `${copiesInUse}/${totalCopies}`
  }

  getCategories(categoires: string[]){
    return  categoires.join(", ");
  }

}
