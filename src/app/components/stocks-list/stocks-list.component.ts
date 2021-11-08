import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {
  public allStocksList: Stock []=[];

  constructor(public stocksService: StocksService) { }

  ngOnInit(): void {
    this.stocksService.getAllStocks().subscribe((response) => {
      this.allStocksList = response;
      console.log(this.allStocksList);
    });
  }

}
