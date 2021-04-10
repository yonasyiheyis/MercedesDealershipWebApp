import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
private mockdata = [{price:'100',year:'2005',mpg:1250,pictureUrl:'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg'},{price:'100',year:'2005',mpg:1250,pictureUrl:'https://cars.usnews.com/pics/size/640x420/static/images/article/202002/128389/1_title_2020_kia_optima.jpg'}]
  constructor(public http:HttpClient) { }

  getcars(){

    return of(this.mockdata)
    return this.http.get('http:localhost:3000/admin/cars')
  }

  addcars(carsdetail){
this.mockdata.push(carsdetail)
    return this.http.post('http:localhost:3000/admin/cars',carsdetail)
  }
}
