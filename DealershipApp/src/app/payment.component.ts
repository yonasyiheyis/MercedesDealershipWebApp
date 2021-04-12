import { Component } from '@angular/core';
import { UserService } from './user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  template: `
  <form [formGroup]="paymentForm" (ngSubmit)="onSubmit()">
  <div class="form-group">
    <label for="full_Name">fullName: </label>
    <input type="text" class="form-control" id="fullName" formControlName="full_Name">
  </div>
  <div class="form-group">
    <label for="card_Number">card Number: </label>
    <input type="text" class="form-control" id="card Number" formControlName="card_Number">
  </div>
  <div class="form-group">
  <label for="expired_date"expired_date: </label>
  <input type="text" class="form-control" id="expired_date" formControlName="expired_date">
</div>
  <div class="form-group">
    <label for="billing_Address">billing Address: </label>
    <input type="text" class="form-control" id="billing_Address" formControlName="billing_Address">
  </div>  
  
  <button type="submit" class="btn btn-primary"  [disabled]="!paymentForm.valid">Pay</button>
  </form>
  `,
  styles: ['input,select {width :700px} div{margin: 1em}'],
})
export class PaymentComponent {
  paymentForm: FormGroup;
  subscription;
  car;
  constructor(
    private formBuilder: FormBuilder,
    private data: UserService,
    private route: Router
  ) {
    this.car = this.route.getCurrentNavigation().extras.state.body;

    this.paymentForm = this.formBuilder.group({
      full_Name: ['', Validators.required],
      card_Number: ['', Validators.required],
      expired_date: ['', Validators.required],
      billing_Address: ['', Validators.required],
    });
  }

  onSubmit() {
    this.subscription = this.data
      .addPayment(this.paymentForm.value)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
