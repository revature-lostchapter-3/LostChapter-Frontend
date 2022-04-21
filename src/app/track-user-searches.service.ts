import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './Products';

@Injectable({
  providedIn: 'root'
})
export class TrackUserSearchesService {

  private baseURL = "http://localhost:8081/books/{id}"

  constructor(private http: HttpClient) { }

  getBookId(): Observable<Products[]>{
    return this.http.get<Products[]>(`${this.baseURL}`);
  }

}
