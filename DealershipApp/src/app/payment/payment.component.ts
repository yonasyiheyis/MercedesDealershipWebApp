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
  car;
  paymentForm: any;
  subscription;
  constructor(
    private formBuilder: FormBuilder,
    private data: UserService,
    public route: Router
  ) {
    this.car = history.state.data;

    this.paymentForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      card_Number: ['', Validators.required],
      expired_date: ['', Validators.required],
      billing_Address: ['', Validators.required],
    });
  }

  onSubmit() {
    this.subscription = this.data
      .addPayment(this.paymentForm.value, this.car)
      .subscribe((response) => {
        console.log(this.car);
        console.log(this.paymentForm.value);
        alert('pay sucessfuly!!');
        this.route.navigate(['/view']);
      });
  }
}
