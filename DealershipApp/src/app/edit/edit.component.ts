import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  carForm;
  car;
  subscription;

  constructor(
    public ed: FormBuilder,
    public service: CarService,
    public route: Router
  ) {
    this.car = history.state.data;
    console.log('Id is: ' + this.car._id);
  }
  ngOnInit(): void {
    this.carForm = this.ed.group({
      brand: [this.car.brand, Validators.required],
      model: [this.car.model, Validators.required],
      type: [this.car.type, Validators.required],
      year: [this.car.year, Validators.required],
      price: [
        this.car.price,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      engine: [this.car.engine, Validators.required],
      transmission: [this.car.transmission, Validators.required],
      color: [this.car.color, Validators.required],
      mpg: [this.car.mpg, Validators.required],
      pictureUrl: [this.car.pictureUrl, Validators.required],
    });
    console.log('Form', this.carForm);
  }
  public updateCar() {
    this.carForm.value._id = this.car._id;
    this.subscription = this.service.updateCar(this.carForm.value).subscribe(
      (response) => {
        alert("Updated Successfully!");
        this.route.navigate(['/admin']);
      },
      (error) => alert(error['msg'])
    );
  }
}
