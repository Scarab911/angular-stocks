import { Component, Input, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'stock-description',
  templateUrl: './stock-description.component.html',
  styleUrls: ['./stock-description.component.scss']
})
export class StockDescriptionComponent implements OnInit {
  @Input() stock!: Stock;

  constructor() { }

  ngOnInit(): void {
  }

}
