import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: any;
  subscription;
  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    public route: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  logIn() {
    this.subscription = this.service.getUser(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('token', response['token']);
        if (response['success'] === 1) {
          localStorage.setItem('role', response['role']);
          if (response['role'] === 'admin') {
            this.route.navigate(['/admin']);
          } else {
            this.route.navigate(['/view']);
          }
        } else {
          alert('wrong password/email');
          this.route.navigate(['/login']);
        }
      },
      (error) => {
        this.route.navigate(['/login']);
      }
    );
  }
}
