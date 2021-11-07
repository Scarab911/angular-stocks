import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockFormComponent } from './components/add-stock-form/add-stock-form.component';
import { StockInfoComponent } from './components/stock-info/stock-info.component';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: StocksListComponent
  },
  {
    path: 'addStock',
    component: AddStockFormComponent
  },
  {
    path: 'market/:code',
    component: StockInfoComponent
  },
  {
    path: 'market',
    component: StockInfoComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
