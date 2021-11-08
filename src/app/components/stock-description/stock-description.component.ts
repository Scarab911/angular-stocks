import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'stock-description',
  templateUrl: './stock-description.component.html',
  styleUrls: ['./stock-description.component.scss']
})
export class StockDescriptionComponent implements OnInit {
  public stock!: Stock;
  public code: string = '';

  constructor(
    private stocksService: StocksService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    console.log('akcijas pries uzkrovima:',this.stock);

    this.code = this.route.snapshot.params['code'];
    this.stocksService.getStockInfo(this.code).subscribe((resp: Stock[]) => {
      this.stock = resp[0];
      console.log('Serverio atsakymas:', resp);
    });
    console.log('akcija po kreipimosi i serva',this.stock);
  }

  public makeFavorite(){
    this.stock.favorite = true;
    this.stocksService.editStock(this.stock).subscribe((resp) => {})
  }
  public makeUnFavorite(){
    this.stock.favorite = false;
    this.stocksService.editStock(this.stock).subscribe((resp) => {})
  }
}
