import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public carsList = [];

  constructor(public service: CarService) {}

  ngOnInit() {
    this.service.getCars().subscribe((data) => {
      console.log(data);
      //this.carsList = data
    });
  }
}
