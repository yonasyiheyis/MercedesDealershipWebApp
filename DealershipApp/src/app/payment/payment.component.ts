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
  constructor(
    private formBuilder: FormBuilder,
    private data: UserService,
    public route: Router
  ) { }
  ngOnInit(){
    this.paymentForm = this.formBuilder.group({
      email: ['', Validators.required],
      full_Name: ['', Validators.required],
      card_Number: ['', Validators.required],
      expired_date: ['', Validators.required],
      billing_Address: ['', Validators.required],
    });
  
  }
    //this.car = this.route.getCurrentNavigation().extras.state.body;


    


  onSubmit() {
    this.subscription = this.data

      .addPayment(this.paymentForm.value)
      .subscribe((response) => {
        console.log(response);

        alert('pay sucessfuly!!');
        this.route.navigate(['/view']);

      });
  }
}
