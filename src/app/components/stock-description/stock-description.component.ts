import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { AccessService } from 'src/app/services/access.service';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'stock-description',
  templateUrl: './stock-description.component.html',
  styleUrls: ['./stock-description.component.scss']
})
export class StockDescriptionComponent implements OnInit {
  public stock!: Stock;
  public code: string = '';

  @Input() showForm!:boolean;
  @Output() showFormChange = new EventEmitter<boolean>();

  constructor(
              private stocksService: StocksService,
              private route: ActivatedRoute,
              private accessService: AccessService
    ) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.params['code'];
    this.stocksService.getStockInfo(this.code).subscribe((resp: Stock) => {
      this.stock = resp;
    });
  }

  public makeFavorite(){
    this.stock.favorite = true;
    this.stocksService.editStock(this.stock).subscribe((resp) => {})
  }
  public makeUnFavorite(){
    this.stock.favorite = false;
    this.stocksService.editStock(this.stock).subscribe((resp) => {})
  }

  public get isLogged(): boolean {
    return this.accessService.isLoggedIn
  }

  public toggleDisplay(): void {
    this.showForm = !this.showForm;
    console.log('reiksme isShow:', this.showForm);
    this.showFormChange.emit(this.showForm)
  }
}
