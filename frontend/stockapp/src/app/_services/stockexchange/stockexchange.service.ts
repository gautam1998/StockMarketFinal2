import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/stockExchange/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {
  private baseUrl = 'http://laptop-5uvd4pa0:8088/service-company2/api/stockExchange2/';
  constructor(private http: HttpClient) { }

  getSE(): Observable<any> {
    return this.http.get(`${this.baseUrl}all`);
  }
 
  addPerson(person): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseUrl + 'addStockExchange', body,{'headers':headers})
  }
}