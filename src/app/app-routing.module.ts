import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: StocksListComponent
  },
  {
    path: '',
    component: StocksListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
