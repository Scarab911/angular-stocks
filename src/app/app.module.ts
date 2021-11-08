import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { StockComponent } from './components/stock/stock.component';
import { HeaderComponent } from './components/header/header.component';
import { StockInfoComponent } from './components/stock-info/stock-info.component';
import { StockDescriptionComponent } from './components/stock-description/stock-description.component';
import { AddStockFormComponent } from './components/add-stock-form/add-stock-form.component';
import { EditStockFormComponent } from './components/edit-stock-form/edit-stock-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    StocksListComponent,
    StockComponent,
    HeaderComponent,
    StockInfoComponent,
    StockDescriptionComponent,
    AddStockFormComponent,
    EditStockFormComponent
  ],
  imports: [
    MatSidenavModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
