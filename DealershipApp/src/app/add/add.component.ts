import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  public carForm: any;
  constructor(
    public fb: FormBuilder,
    public service: CarService,
    public route: Router
  ) {}
  ngOnInit() {
    this.carForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      type: ['', Validators.required],
      year: ['', Validators.required],
      price: ['', Validators.compose([Validators.required, Validators.min(0)])],
      engine: ['', Validators.required],
      transmission: ['', Validators.required],
      color: ['', Validators.required],
      mpg: ['', Validators.required],
      pictureUrl: ['', Validators.required],
    });
  }

  async addCar() {
    console.log(this.carForm.value);
    this.service.addCar(this.carForm.value).subscribe((data) => {
      console.log(data);
      this.route.navigate(['/admin']);
    });
  }
}
