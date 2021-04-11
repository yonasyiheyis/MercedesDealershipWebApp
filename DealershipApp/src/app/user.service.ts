import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 
    }
   
  signUp(body){
   // return this.http.post(`http://localhost:3000/users/add`, body);
  }
  signIn(body){
   // return this.http.post(`http://localhost:3000/users/add`, body);
  }
}
