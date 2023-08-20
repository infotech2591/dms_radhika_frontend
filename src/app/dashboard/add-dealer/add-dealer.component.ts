import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.css']
})
export class AddDealerComponent {
  dealerCode: any;
  name: any;
  email: any;
  mobile: any;
  address: any;
  shopAddress: any;


  constructor(
    public dialogRef: MatDialogRef<AddDealerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit(): void {
    const formData = {
      dealerCode: this.dealerCode,
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      address: this.address,
      shopAddress: this.shopAddress
    };

    // Pass the form data to the parent component
    this.dialogRef.close(formData);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
