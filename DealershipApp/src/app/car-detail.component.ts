import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'car-detail',
  template: `
    <mat-card class="tp-card">
      <!--
   <mat-card-header>
      <div mat-card-avatar class = "tp-header-image"></div>
      <mat-card-title>HTML5</mat-card-title>
      <mat-card-subtitle>HTML Basics</mat-card-subtitle>
   </mat-card-header>
   -->
      <img mat-card-image src="{{ car.pictureUrl }}" alt="picture of the car" />
      <mat-card-content>
        <div class="model">{{ car.brand }} {{ car.model }}</div>
        <br />
        <div class="props">
          <span>Year:</span> <br />
          <span>Engine:</span> <br />
          <span>Transmission:</span> <br />
          <span>MPG:</span> <br />
          <span>Type:</span> <br />
          <span>Exterior Color:</span> <br />
        </div>

        <div class="vals">
          <span>{{ car.year }}</span> <br />
          <span>{{ car.engine }}</span> <br />
          <span>{{ car.transmission }}</span> <br />
          <span>{{ car.mpg }}</span> <br />
          <span>{{ car.type }}</span> <br />
          <span>{{ car.color }}</span> <br />
        </div>

        <br /><br /><br />
        <div class="price">Price: {{ car.price }}</div>

        <div class="buy">
          <mat-card-actions>
            <button mat-raised-button color="accent" (click)="pay()">
              Proceed To Checkout
            </button>
          </mat-card-actions>
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
    '.tp-card {height: 350px; min-height: 250px; width: 75%; margin: auto; background-color: #8c8c8c; background-image: url("/../assets/detail-comp.jpg");}',
    '.mat-card-image {width: 300px; height: 300px; float: left; margin-right: 20px; padding-top: 10px; padding-left: 10px;}',
    'mat-card-content {font-size: 18px; color: #cc3300; font-family: "Courier New", monospace; font-weight: bold;}',
    '.model {color: #4d194d; font-size: 24px; font-family: "Courier New", monospace; font-weight: 900; font-style: italic;}',
    'div.props {float: left; margin-right: 65px; font-family: "OCR A Std", monospace; font-weight: bold;}',
  ]
})
export class CarDetailComponent {
  @Input() car;

  constructor(private router: Router, private userService: UserService) { }

  pay() {
    if (this.userService.getToken() != null) {
      this.router.navigate(['pay'], { state: { data: this.car } });
    } else {
      this.router.navigate(['/login']);
    }

  }
}
