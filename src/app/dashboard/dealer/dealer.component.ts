import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddDealerComponent } from '../add-dealer/add-dealer.component';
@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css'],
  // standalone: true,
  // imports: [MatTableModule, MatPaginatorModule],
})
export class DealerComponent {
  displayedColumns: string[] = ['dealerCode', 'name', 'email', 'mobile','address','shopAddress', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor(private dialog: MatDialog,) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addDealer(){
    const dialogRef = this.dialog.open(AddDealerComponent,{
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
  email: string;
  mobile: string;
  address: string;
  shopAddress: string;
}

  
const ELEMENT_DATA: PeriodicElement[] = [
  {dealerCode: '8889999888998', name: 'Aman Malviya', email: 'info@gmail.com', mobile: '8889999888998',address:'test', shopAddress: 'test2'},
  {dealerCode: '8889999888998', name: 'Ravi Jaiswal', email: 'info@gmail.com', mobile: '8889999888998',address:'test', shopAddress: 'test2'},
  {dealerCode: '8889999888998', name: 'Ajay Malviya', email: 'info@gmail.com', mobile: '8889999888998',address:'test', shopAddress: 'test2'},
  {dealerCode: '8889999888998', name: 'Vaibhav Bhana', email: 'info@gmail.com', mobile: '8889999888998',address:'test', shopAddress: 'test2'},
  {dealerCode: '8889999888998', name: 'Prashant Mishra', email: 'info@gmail.com', mobile: '8889999888998',address:'test', shopAddress: 'test2'},
  {dealerCode: '8889999888998', name: 'Priya Malviya', email: 'info@gmail.com', mobile: '8889999888998',address:'test', shopAddress: 'test2'},
  {dealerCode: '8889999888998', name: 'Sachin Jaiswal', email: 'info@gmail.com', mobile: '8889999888998',address:'test', shopAddress: 'test2'},
  {dealerCode: '8889999888998', name: 'Hemant Rajak', email: 'info@gmail.com', mobile: '8889999888998',address:'test', shopAddress: 'test2'},
  {dealerCode: '8889999888998', name: 'Shailendra Sharma', email: 'info@gmail.com', mobile: '8889999888998',address:'test', shopAddress: 'test2'},
];