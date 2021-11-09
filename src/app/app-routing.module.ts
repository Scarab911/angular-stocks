import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockFormComponent } from './components/add-stock-form/add-stock-form.component';
import { EditStockFormComponent } from './components/edit-stock-form/edit-stock-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StockInfoComponent } from './components/stock-info/stock-info.component';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: StocksListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
    path: 'market/edit/:code',
    component: EditStockFormComponent
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
