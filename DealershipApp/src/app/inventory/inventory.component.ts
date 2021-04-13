import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  //cars = []

  public cars;

  subscription;
  constructor(private data: CarService) { }

  ngOnInit() {
    this.subscription = this.data.getCars().subscribe((response) => {
      this.cars = response;
      console.log(this.cars);
    });
  }

  // constructor() { }

  // ngOnInit() {

  //   this.cars = [{
  //     id: 1,
  //     brand: 'Mercedes',
  //     model: 'c400d',
  //     price: '45000',
  //     year: '2018',
  //     type: 'sedan',
  //     engine: '2L I4',
  //     transmission: 'automatic',
  //     color: 'red',
  //     mpg: 25,
  //     pictureUrl: "https://www.renderhub.com/bug-irl/mercedes-benz-c-class-2019/mercedes-benz-c-class-2019.jpg"
  //   },
  //   {
  //     id: 1,
  //     brand: 'Mercedes',
  //     model: 'e350 amg',
  //     price: '45000',
  //     year: '2020',
  //     type: 'sedan',
  //     engine: '3.5L v6',
  //     transmission: 'automatic',
  //     color: 'Gray',
  //     mpg: 23,
  //     pictureUrl: "https://www.renderhub.com/3dstarving/mercedes-benz-e-class-2021/mercedes-benz-e-class-2021.jpg"
  //   },
  //   {
  //     id: 1,
  //     brand: 'Mercedes',
  //     model: 'G 63 AMG',
  //     price: '112000',
  //     year: '2019',
  //     type: 'SUV',
  //     engine: '4.2L v8',
  //     transmission: 'automatic',
  //     color: 'Metallic Black',
  //     mpg: 21,
  //     pictureUrl: "https://pbs.twimg.com/profile_images/1224105868406353921/hDmnjetT_400x400.jpg"
  //   }]

  // }

}
