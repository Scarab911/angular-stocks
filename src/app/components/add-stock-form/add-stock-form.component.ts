import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-add-stock-form',
  templateUrl: './add-stock-form.component.html',
  styleUrls: ['./add-stock-form.component.scss']
})
export class AddStockFormComponent implements OnInit {
  @Input() showForm!:boolean;
  @Output() showFormChange = new EventEmitter<boolean>();

  constructor(
              private stocksService: StocksService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }

  public createStock(form: NgForm): void {
    const stock: Stock = {
      name: form.form.controls.name.value,
      code: form.form.controls.code.value,
      price: form.form.controls.price.value,
      previousPrice: form.form.controls.price.value,
      exchange: form.form.controls.exchange.value,
      favorite: form.form.controls.favorite.value,
    };
    this.stocksService.addStock(stock);
    form.form.reset(); 
    // this.router.navigate(['/']);  
  }

  public toggleDisplay(): void {
    this.showForm = !this.showForm;
    console.log('reiksme isShow:', this.showForm);
    this.showFormChange.emit(this.showForm)
  }
}
