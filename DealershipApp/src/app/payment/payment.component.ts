import { Component, OnInit } from '@angular/core';
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
  car;
  constructor(
    private formBuilder: FormBuilder,
    private data: UserService,
    public route: Router
  ) {

    const visited = parseInt(localStorage.getItem('visited')) + 1;
    localStorage.setItem('visited', '' + visited)

    this.car = history.state.data;

    this.paymentForm = this.formBuilder.group({
      name: ['', Validators.required],
      card_Number: ['', Validators.required],
      expired_date: ['', Validators.required],
      billing_Address: ['', Validators.required],
      email: ['', Validators.required],
    });

  }




  onSubmit() {
    this.subscription = this.data

      .addPayment(this.paymentForm.value, this.car)
      .subscribe((response) => {
        if (response['success'] === 1) {
          alert('pay sucessfuly!!');
          this.route.navigate(['/view']);
        } else {
          alert('enter payment details first!!');
          this.route.navigate(['/pay']);
        }

      });
  }
}
