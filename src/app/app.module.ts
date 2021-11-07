import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { StockComponent } from './components/stock/stock.component';
import { HeaderComponent } from './components/header/header.component';
import { StockInfoComponent } from './components/stock-info/stock-info.component';
import { StockDescriptionComponent } from './components/stock-description/stock-description.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksListComponent,
    StockComponent,
    HeaderComponent,
    StockInfoComponent,
    StockDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
