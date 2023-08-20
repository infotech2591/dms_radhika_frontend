import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DealerComponent } from './dealer/dealer.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { DealerStocksComponent } from './dealer-stocks/dealer-stocks.component';
import { AddDealerStocksComponent } from './add-dealer-stocks/add-dealer-stocks.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DashboardComponent,
    DealerComponent,
    CustomerComponent,
    HomeComponent,
    AddDealerComponent,
    AddCustomerComponent,
    DealerStocksComponent,
    AddDealerStocksComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
    // BrowserAnimationsModule,
    // BrowserModule
  ]
})
export class DashboardModule { }
