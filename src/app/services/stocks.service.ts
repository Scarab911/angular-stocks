import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private stocksList: Stock [] = [];

  constructor(private http: HttpClient) {

  }

  public getAllStocks(): void {
    const request = this.http.get('http://localhost:3000/api/stock');

    request.subscribe((response: any) => {
      this.stocksList = response;
    });
  }
  
}