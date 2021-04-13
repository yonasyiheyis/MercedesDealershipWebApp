import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from './car.service';

@Component({
  selector: 'admin-car-detail',
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
            <button mat-raised-button color="accent" (click)="update()">
              Update
            </button>
            <button mat-raised-button color="warn" (click)="delete()">
              Delete
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
    '.tp-card {height: 350px; min-height: 250px; width: 75%; margin: auto; background-color: #CDCDCD;}',
    '.mat-card-image {width: 300px; height: 300px; float: left; margin-right: 20px; padding-top: 10px; padding-left: 10px;}',
    'mat-card-content {font-size: 18px;}',
    '.model {color: blue; font-size: 22px; font-weight: bold;}',
    'div.props {float: left; margin-right: 65px; font-family: "Courier New", monospace;}',
  ],
})
export class AdminCarDetailComponent {
  @Input() car;
  subscription;
  constructor(private router: Router, private service: CarService) {}

  delete() {
    this.subscription = this.service.deleteCar(this.car).subscribe(
      (response) => {
        this.router.navigate(['/login']);
        alert(response);
      },
      (error) => alert(error['msg'])
    );
  }

  update() {
    this.router.navigate(['/edit'], { state: { data: this.car } });
  }
}
