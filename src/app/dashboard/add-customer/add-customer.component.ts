import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  dealerCode: any;
  name: any;
  mobile: any;
  address: any;
  purchaseDate: any;
  motor: any;
  motorSerial: any;
  pump: any;
  pumpSerial: any;
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
  constructor(
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit(): void {
    const formData = {
      dealerCode: this.dealerCode,
      name: this.name,
      purchaseDate: this.purchaseDate,
      mobile: this.mobile,
      address: this.address,
      motor: this.motor,
      motorSerial: this.motorSerial,
      pump: this.pump,
      pumpSerial: this.pumpSerial,
    };

    // Pass the form data to the parent component
    this.dialogRef.close(formData);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
