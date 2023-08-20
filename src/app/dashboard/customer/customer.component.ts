import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  displayedColumns: string[] = ['dealerCode', 'name', 'customerId', 'mobile','address','purchaseDate', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor(private dialog: MatDialog,) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addCustomer(){
    const dialogRef = this.dialog.open(AddCustomerComponent,{
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
  customerId: string;
  mobile: string;
  address: string;
  purchaseDate: string;
}

  
const ELEMENT_DATA: PeriodicElement[] = [
  {dealerCode: '8889999888998', name: 'Aman Malviya', customerId: 'DWX_98889898989', mobile: '8889999888998',address:'test', purchaseDate: '11/02/2023'},
  {dealerCode: '8889999888998', name: 'Ravi Jaiswal', customerId: 'DWX_98889898989', mobile: '8889999888998',address:'test', purchaseDate: '11/02/2023'},
  {dealerCode: '8889999888998', name: 'Ajay Malviya', customerId: 'DWX_98889898989', mobile: '8889999888998',address:'test', purchaseDate: '11/02/2023'},
  {dealerCode: '8889999888998', name: 'Vaibhav Bhana', customerId: 'DWX_98889898989', mobile: '8889999888998',address:'test', purchaseDate: '11/02/2023'},
  {dealerCode: '8889999888998', name: 'Prashant Mishra', customerId: 'DWX_98889898989', mobile: '8889999888998',address:'test', purchaseDate: '11/02/2023'},
  {dealerCode: '8889999888998', name: 'Priya Malviya', customerId: 'DWX_98889898989', mobile: '8889999888998',address:'test', purchaseDate: '11/02/2023'},
  {dealerCode: '8889999888998', name: 'Sachin Jaiswal', customerId: 'DWX_98889898989', mobile: '8889999888998',address:'test', purchaseDate: '11/02/2023'},
  {dealerCode: '8889999888998', name: 'Hemant Rajak', customerId: 'DWX_98889898989', mobile: '8889999888998',address:'test', purchaseDate: '11/02/2023'},
  {dealerCode: '8889999888998', name: 'Shailendra Sharma', customerId: 'DWX_98889898989', mobile: '8889999888998',address:'test', purchaseDate: '11/02/2023'},
];
