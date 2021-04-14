import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-body',
  template: `
  <mat-card class = "tp-card" style="background-image: url('/../assets/merc-home1.jpg');">
  <!--
  <mat-card-header>
     <div mat-card-avatar class = "tp-header-image"></div>
     <mat-card-title>HTML5</mat-card-title>
     <mat-card-subtitle>HTML Basics</mat-card-subtitle>
  </mat-card-header>
  -->
  <mat-card-content>

    <div class="viewInv">
      <mat-card-actions>
        <button mat-raised-button color="accent" (click)="goToInventory()">View Inventory</button>
      </mat-card-actions>
    </div>

    <br> <br> <br> <br> <br> <br> <br>
    <div class="props">
      <span class="firstL">Let's Get You</span> <br> <br>
      <span class="firstL">An All New</span> <br> <br>
      <span class="firstL">Mercedes-Benz</span> <br> <br>
      <span class="thirdL">The Ultimate Luxury Car.</span> <br>
    </div>

     
  </mat-card-content>
  <!--
  <mat-card-actions>
     <button mat-button>LIKE</button>
     <button mat-button>SHARE</button>
  </mat-card-actions>
  -->
 </mat-card>
  `,
  styles: [
    '.tp-card {height: 700px; width: 100%;}',
    'mat-card-content {font-size: 18px;}',
    'div.props {float: left; margin-left: 100px; font-family: "Courier New", monospace; color: white;}',
    'div.viewInv {text-align: center;}',
    'button {width: 300px;}',
    '.firstL {font-size: 50px; font-weight: bold; font-style: italic;}',
    '.thirdL {font-size: 22px;}',
  ]
})
export class HomeBodyComponent {

  constructor(private router: Router) { }

  goToInventory() {
    this.router.navigate(['/view']);
  }

}
