import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'edit-stock-form',
  templateUrl: './edit-stock-form.component.html',
  styleUrls: ['./edit-stock-form.component.scss']
})
export class EditStockFormComponent implements OnInit {
  public stock!: Stock;

  constructor(
              private stocksService: StocksService,
              private route: Router
  ) { }

  ngOnInit(): void {
  }

}
