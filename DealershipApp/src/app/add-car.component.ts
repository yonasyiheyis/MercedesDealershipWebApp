import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'add-car',
  template: `
    <mat-card class = "tp-card" style="background-image: url('/../assets/repeat3.jpg');">
    
    <mat-card-content>

      <div class="viewInv">
        <mat-card-actions>
          <button mat-raised-button color="accent" (click)="goToAdd()">Add New Car</button>
        </mat-card-actions>
      </div>
    
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    '.tp-card {height: 75px; width: 100%;}',
    'button {width: 300px;}',
    'div.viewInv {text-align: center;}',
  ]
})
export class AddCarComponent {

  constructor(private router: Router) { }

  goToAdd() {
    this.router.navigate(['/add']);
  }

}
