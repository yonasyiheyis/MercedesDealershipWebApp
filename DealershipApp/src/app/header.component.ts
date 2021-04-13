import { Component, OnInit } from '@angular/core';

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

    <nav class="navbar navbar-expand-lg navbar-light bg-dark" style="background-color: #e3f2fd;">
    <img class="mercLogo" src="../assets/merc-logo.png"/>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      </ul>
      <form class="form-inline my-2 my-lg-0">
       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Log In</button>
      </form>
      </div>
    </nav>
  `,
  styles: [
    // '.nav {display: inline;}',
    // 'div {background-color: coral; height: 105px}',
    'img.mercLogo {height: 80px;}',
    'nav {background-color: #ffffff;}',
    '#welcome {font-size: 50px;}',
    //'#navigation,.navbar .navbar-default{background-image: url("img/flower.jpg");}'
    // 'p {width: 100px; height: 100px; font-size: 25px; margin-right: 300px}'
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
