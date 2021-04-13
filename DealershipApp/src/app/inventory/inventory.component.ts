import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  public cars;
  subscription;
  constructor(private data: CarService) {}

  ngOnInit() {
    this.subscription = this.data.getCars().subscribe((response) => {
      this.cars = response;
      console.log(this.cars);
    });
  }
}
