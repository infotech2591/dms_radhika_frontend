import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dealer-stocks',
  templateUrl: './add-dealer-stocks.component.html',
  styleUrls: ['./add-dealer-stocks.component.css']
})
export class AddDealerStocksComponent {
  dealerCode: any;
  motor: any;
  motorSerial: any;
  pump: any;
  pumpSerial: any;
  set: any;

  constructor(
    public dialogRef: MatDialogRef<AddDealerStocksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  dealers:any = [
    {dealerCode: '8889999888998', name: 'Aman Malviya', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Ravi Jaiswal', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Ajay Malviya', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Vaibhav Bhana', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Prashant Mishra', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Priya Malviya', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Sachin Jaiswal', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Hemant Rajak', motorQty: 10, pumpQty: 10},
  {dealerCode: '8889999888998', name: 'Shailendra Sharma', motorQty: 10, pumpQty: 10},
  ]

  sets:any = [
    {set:'V4 SP set'},
    {set:'V4 TP set'},
    {set:'V6 only motor'},
    {set:'V6 only pump'},
    {set:'Horizontal 3.0 HP openwell 324'},
    {set:'Horizontal 3.0 HP openwell 332'},
    {set:'Horizontal 5.0 HP openwell 526'},
    {set:'Horizontal 5.0 HP openwell 534'},
    {set:'Horizontal 5.0 HP openwell 543'},
    {set:'Horizontal 7.5 HP openwell 734'},
    {set:'Horizontal 7.5 HP openwell 743'},
    {set:'Horizontal 7.5 HP openwell 750'},
  ]

  onSubmit(): void {
    const formData = {
      dealerCode: this.dealerCode,
      motor: this.motor,
      motorSerial: this.motorSerial,
      pump: this.pump,
      pumpSerial: this.pumpSerial,
      set: this.set
    };

    // Pass the form data to the parent component
    this.dialogRef.close(formData);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}