import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'header',
  template: `
    <!--
    <div>
    <li class="nav-item">
      <a class="nav-link" id="welcome">WELCOME TO MERCEDES-BENZ FAIEFIELD</a>
    </li>
    <a class="navbar-brand" href="#">Navbar</a>
    <img class="nav" src="http://kcautoshow.com/wp-content/uploads/2017/12/Mercedes-Benz-Logo-PNG-File.png" alt="merc-logo"/>
    <p class="nav"> WELCOME TO MERCEDES-BENZ FAIEFIELD </p>
    <button class="nav" mat-raised-button color="warning">Sign In</button>
    </div>
    -->

    <nav class="navbar navbar-expand-lg navbar-light bg-dark" style="background-color: #8f8f8a;">
    <img class="mercLogo" src="../assets/merc-logo.png" (click)="toHome()"/>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      </ul>
      <form class="form-inline my-2 my-lg-0">
       <button *ngIf="show" class="btn btn-outline-success my-2 my-sm-0" type="submit" (click)="toLogin()">Log In</button>
       <button *ngIf="signup" class="btn btn-outline-success my-2 my-sm-0" type="submit" (click)="toSignup()">Sign Up</button>
      </form>
      </div>
    </nav>
  `,
  styles: [
    // '.nav {display: inline;}',
    // 'div {background-color: coral; height: 105px}',
    'img.mercLogo {height: 80px;}',
    'nav {background-color: #e3f2fd;}',
    '#welcome {font-size: 50px;}',
    //'#navigation,.navbar .navbar-default{background-image: url("img/flower.jpg");}'
    // 'p {width: 100px; height: 100px; font-size: 25px; margin-right: 300px}'
  ]
})
export class HeaderComponent {

  show = true
  signup = true

  constructor(private router: Router, private service: UserService) {
    if (this.service.getToken() != null) {
      console.log("Here is the token: " + this.service.getToken())
      this.show = false
      this.signup = true
    } else {
      this.show = true
      this.signup = true
    }
  }

  toLogin() {
    this.router.navigate(['/login']);
  }

  toSignup() {
    this.router.navigate(['/signup']);
  }

  toHome() {
    this.router.navigate(['/']);
  }

}
