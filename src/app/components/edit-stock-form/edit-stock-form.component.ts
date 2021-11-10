import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() showForm!:boolean;
  @Output() showFormChange = new EventEmitter<boolean>();

  constructor(
              private stocksService: StocksService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.params['code'];
    this.stocksService.getStockInfo(this.code).subscribe((resp: Stock[]) => {
      this.stock = resp[0];
    });
  }

  public editStock(): void {
    this.stocksService.editStock(this.stock).subscribe((response) => {
      this.router.navigate(['/']);
    });
  }

  public toggleDisplay(): void {
    this.showForm = !this.showForm;
    console.log('reiksme isShow:', this.showForm);
    this.showFormChange.emit(this.showForm)
  }
}
