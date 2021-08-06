import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {


  apiUrl: string = 'http://localhost:3000/entries';

  constructor(private httpClient: HttpClient) { }

  // Show lists of entries
  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  // Create new entries
  getItem(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data);
  }

  // Update 
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data);
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  // Search By Name
  filterByTitle(title: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?title_like=${title}`);
  }
}
