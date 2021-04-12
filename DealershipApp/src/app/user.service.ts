import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 
    }  

    getUser(body){  
      return this.http.post(`http://localhost:3000/auth/signin`, body);
     }
    }
  
    
  
   

    
  

