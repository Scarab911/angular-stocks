import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'edit-stock-form',
  templateUrl: './edit-stock-form.component.html',
  styleUrls: ['./edit-stock-form.component.scss']
})
export class EditStockFormComponent implements OnInit {
  public stock!: Stock;
  public code: string='';

  constructor(
              private stocksService: StocksService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.params['code'];
    this.stocksService.getShowStock(this.code).subscribe((resp: Stock[]) => {
      console.log('Serverio atsakymas:', resp);
      this.stock = resp[0];
    });
  }

  public editStock(): void {
    console.log('Edit mygtukas paspausta');
    console.log('tai ka paduodam i editStock',this.stock);
    this.stocksService.editStock(this.stock).subscribe((response) => {
      console.log(response);
      // this.router.navigate(['/']);
    });
  }
}
