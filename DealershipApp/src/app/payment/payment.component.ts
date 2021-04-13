import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  paymentForm: any;
  subscription;
  car;
  constructor(
    private formBuilder: FormBuilder,
    private data: UserService,
    public route: Router
  ) {
    this.car = history.state.data
  }
  ngOnInit() {
    this.paymentForm = this.formBuilder.group({

      name: ['', Validators.required],
      card_Number: ['', Validators.required],
      expired_date: ['', Validators.required],
      billing_Address: ['', Validators.required],
      email: ['', Validators.required],
    });

  }
  //this.car = this.route.getCurrentNavigation().extras.state.body;





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
