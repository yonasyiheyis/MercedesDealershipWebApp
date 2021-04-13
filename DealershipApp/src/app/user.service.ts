import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(body) {
    return this.http.post(`http://localhost:3000/auth/signin`, body);
  }
  postsignUp(body) {
    return this.http.post(`http://localhost:3000/users/add`, body);
  }
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
  addPayment(body, car) {
    let finalObj = { payment: body, car: car };
    return this.http.post(`http://localhost:3000/users/pay`, finalObj);
  }
}
