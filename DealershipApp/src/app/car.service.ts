import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  private mockdata = [
    {
      id: 1,
      brand: 'Tesla',
      price:'100',
      year:'2005',
      mpg:1250,
      pictureUrl:'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg'},
      
      {
        id: 2,
        brand: 'Toyota',
        price:'100',
        year:'2005',
        mpg:1250,
        pictureUrl:'https://cars.usnews.com/pics/size/640x420/static/images/article/202002/128389/1_title_2020_kia_optima.jpg'
    
    }]
  
      constructor(public http:HttpClient) { }

  getCars(){

    return of(this.mockdata)
    //return this.http.get('http://localhost:3000/admin/cars')
  }

  addCar(carsdetail: any){
    //mock
    this.mockdata.push(carsdetail);
    //real
    return this.http.post('http://localhost:3000/admin/cars',carsdetail);
  }
     
  updateCar(carDetail: any){
    let carIndex = this.mockdata.findIndex(x=>x.id == carDetail.id);
    this.mockdata[carIndex] = carDetail;
  }
}
