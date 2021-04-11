import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm :any;
  subscription;
  constructor(private formBuilder: FormBuilder ,
    private data : CarService,public route:Router) {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }
  ngOnInit(){

  }
  logIn(){
    //this.subscription = this.data.postCars(this.carsForm.value).subscribe(response=>
      //alert("successful submitted"))
      this.route.navigate(['/admin'])
  }

}
