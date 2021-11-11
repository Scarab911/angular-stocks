import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { AccessService } from './access.service';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient,
              private accessService: AccessService) {
    
  }

  public getAllStocks(): Observable<any> {
    //tikrinam ar atkeliauja token'as
    if (!this.accessService.token) {
      throw new Error('You need acces to see this content')
    }
    //siunciam headerius
    let headers: HttpHeaders = new HttpHeaders;
    headers = headers.set('X-AUTH-HEADER', this.accessService.token);

    return this.http.get(
      'http://localhost:3000/api/stock',
      {headers: headers
      });
  }

  public addStock(newStock: Stock): void {
    //tikrinam ar atkeliauja token'as
    if (!this.accessService.token) {
      throw new Error('You need acces to add more stocks!')
    }
    //siunciam headerius
    let headers: HttpHeaders = new HttpHeaders;
    headers = headers.set('X-AUTH-HEADER', this.accessService.token);

    const request = this.http.post('http://localhost:3000/api/stock', newStock, {headers: headers});

    request.subscribe((response: any) => {
      console.log('Response from server:', response);
    });
  }

  public editStock(stock: Stock): Observable<any> {
    //tikrinam ar atkeliauja token'as
    if (!this.accessService.token) {
      throw new Error('You need acces to add more stocks!')
    }
    //siunciam headerius
    let headers: HttpHeaders = new HttpHeaders;
    headers = headers.set('X-AUTH-HEADER', this.accessService.token);

    return this.http.patch(`http://localhost:3000/api/stock/${stock.code}`, stock, {
      headers:headers
    });
  }

  public getStockInfo(code: string): Observable<Stock> {
    //tikrinam ar atkeliauja token'as
    if (!this.accessService.token) {
      throw new Error('You need acces ^^ to add more stocks!')
    }
    //siunciam headerius
    let headers: HttpHeaders = new HttpHeaders;
    headers = headers.set('X-AUTH-HEADER', this.accessService.token);

    return this.http.get<Stock>(`http://localhost:3000/api/stock/${code}`, {
      headers:headers
    });
  }

}
