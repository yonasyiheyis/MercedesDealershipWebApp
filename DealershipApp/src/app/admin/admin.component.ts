import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public carsList;

  subscription;
  constructor(private data: CarService) {}

  ngOnInit() {
    this.subscription = this.data.getCars().subscribe((response) => {
      this.carsList = response;
      console.log(this.carsList);
    });
  }
}
