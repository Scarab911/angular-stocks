import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.scss']
})
export class StockInfoComponent implements OnInit {
  public isShowForm:boolean = false;

  constructor(
 
  ) { 
  }

  ngOnInit(): void {
  }
}
