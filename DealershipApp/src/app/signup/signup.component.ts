import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: any;
  subscription;
  constructor(
    private formBuilder: FormBuilder,
    private data: UserService,
    public route: Router
  ) {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  signUp() {
    this.subscription = this.data.postsignUp(this.signupForm.value).subscribe(
      (response) => {
        this.route.navigate(['/login']);
      },
      (error) => alert(error['msg'])
    );
  }
}
