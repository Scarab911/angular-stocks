import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.scss']
})
export class StockInfoComponent implements OnInit {
  public code!:string;
  public stock!: Stock;

  constructor(
              private route: ActivatedRoute,
              private stocksService: StocksService
  ) { }

  ngOnInit(): void {
    // this.stocksService.getAllStocks();
    this.code = this.route.snapshot.params['code'];
    this.stock = this.stocksService.getStockByCode(this.code);
  }

}
