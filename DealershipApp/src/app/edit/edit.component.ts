import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  carForm: any;  
  car: any;

  constructor(public ed:FormBuilder,public service:CarService, public route: Router) {
    this.car = this.route.getCurrentNavigation().extras.state.body;
    //this.carForm.brand = this.car.brand;
    console.log("Edit car: ", this.car);

   }
  ngOnInit(): void {
    this.carForm = this.ed.group({
      brand:['Hiwi',Validators.required],  
      model:['',Validators.required] ,  
      type:['',Validators.required],
      year:['',Validators.required] ,
      price:['',Validators.compose([Validators.required,Validators.min(0)])],
      engine:['',Validators.required],
      transmission:['',Validators.required],
      color:['',Validators.required],
      mpg:['',Validators.required],
      pictureUrl:['',Validators.required]
  })

  console.log("Form", this.carForm);

  }
  
  public updateCar(): void{
    this.service.updateCar(this.carForm.value);
    this.route.navigate(['/admin'])
  }

}
