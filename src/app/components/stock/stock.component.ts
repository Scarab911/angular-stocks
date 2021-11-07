import { Component, Input, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  @Input()
    public stock!: Stock;

  constructor(public stocksService: StocksService) { }

  ngOnInit(): void {
  }
  
}
