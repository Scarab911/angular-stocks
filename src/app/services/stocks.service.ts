import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  public stocksList: Stock [] = [];

  constructor(private http: HttpClient) {

  }

  public getAllStocks(): void {
    const request = this.http.get('http://localhost:3000/api/stock');

    request.subscribe((response: any) => {
      this.stocksList = response;
      console.log('stocks returned', this.stocksList);
    });
  }
  
  public getStockByCode(code: string): Stock {
    const stock = this.stocksList.find((obj) => obj.code == code);
    console.log(stock);
    if(stock !== undefined){
       return stock
      } else {
        return this.stocksList[0];
      }
  }
}
