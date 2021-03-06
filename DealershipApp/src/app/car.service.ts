import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(public http: HttpClient) {}

  getCars() {
    return this.http.get('http://localhost:3000/admin');
  }

  addCar(carsdetail: any) {
    return this.http.post('http://localhost:3000/admin/cars', carsdetail);
  }

  updateCar(car: Object) {
    return this.http.patch('http://localhost:3000/admin/cars', car);
  }

  deleteCar(car: Object) {
    return this.http.post('http://localhost:3000/admin', car);
  }
}
