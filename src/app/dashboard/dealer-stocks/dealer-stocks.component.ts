import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddDealerComponent } from '../add-dealer/add-dealer.component';
import { AddDealerStocksComponent } from '../add-dealer-stocks/add-dealer-stocks.component';

@Component({
  selector: 'app-dealer-stocks',
  templateUrl: './dealer-stocks.component.html',
  styleUrls: ['./dealer-stocks.component.css']
})
export class DealerStocksComponent {
  displayedColumns: string[] = ['dealerCode', 'name', 'motorQty', 'pumpQty', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor(private dialog: MatDialog,) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addDealer(){
    const dialogRef = this.dialog.open(AddDealerStocksComponent,{
      data:{
        message:'Add Dealer',
      
        buttonText:{
          ok:'Save',
          cancel:'Cancel'
        }
      }
    })
  }
}

export interface PeriodicElement {
  dealerCode: string;
  name: string;
  motorQty: Number;
  pumpQty: Number;
}

  
const ELEMENT_DATA: PeriodicElement[] = [
  {dealerCode: '8889999888998', name: 'Aman Malviya', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Ravi Jaiswal', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Ajay Malviya', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Vaibhav Bhana', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Prashant Mishra', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Priya Malviya', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Sachin Jaiswal', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Hemant Rajak', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Shailendra Sharma', motorQty: 10, pumpQty: 10},
];
