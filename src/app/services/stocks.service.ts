import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) {
  }

  public getAllStocks(): Observable<any> {
    return this.http.get('http://localhost:3000/api/stock');
  }

  public addStock(newStock: Stock): void {
    const request = this.http.post('http://localhost:3000/api/stock', newStock);

    request.subscribe((response: any) => {
      console.log('Response from server:', response);
    });
  }

  public editStock(stock: Stock): Observable<any> {
    return this.http.patch('http://localhost:3000/api/stock/' + stock.code, stock);
  }

  public getStockInfo(code: string): Observable<Stock[]> {
    return this.http.get<Stock[]>('http://localhost:3000/api/stock?q=' + code);
  }

  // public getStockByCode(code: string): Stock {
  //   const stock = this.stocksList.find((obj) => obj.code == code);
  //   console.log(stock);
  //   if(stock !== undefined){
  //      return stock
  //     } else {
  //       return this.stocksList[0];
  //     }
  // }
}
