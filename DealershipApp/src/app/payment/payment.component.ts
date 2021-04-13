import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  paymentForm: any;
  subscription;
  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserService,
    public route: Router
  ) {
    //this.car = this.route.getCurrentNavigation().extras.state.body;

    this.paymentForm = this.formBuilder.group({
      full_Name: ['', Validators.required],
      card_Number: ['', Validators.required],
      expired_date: ['', Validators.required],
      billing_Address: ['', Validators.required],
    });
  }

  onSubmit() {
    this.subscription = this.userservice
      .addPayment(this.paymentForm.value)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
