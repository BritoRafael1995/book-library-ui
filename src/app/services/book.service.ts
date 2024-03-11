import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';
import { SearchFilter } from '../models/searchFilter';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = `http://localhost:16532/book`;

  constructor(private http: HttpClient) { }

  search(filter: SearchFilter): Observable<Book[]> {
    const url = `${this.baseUrl}/search/`;
    return this.http.post<Book[]>(url, filter);
  }
}
