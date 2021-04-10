import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public carForm:any
  constructor(public fb:FormBuilder){}

  ngOnInit(){
this.carForm = this.fb.group({
  brand:['',Validators.required],  
  model:['',Validators.required] ,  
  type:['',Validators.required],
  year:['',Validators.required] ,
  price:['',Validators.compose([Validators.required,Validators.min(0)])],
  engine:['',Validators.required],
  transmission:['',Validators.required],
  color:['',Validators.required],
  years:['',Validators.compose([Validators.required])],
  picUrl:['',Validators.required]


})


  }

  title = 'DealershipApp';

  addCar(){

    console.log(this.carForm.value)

  }

}
