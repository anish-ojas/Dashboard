import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get('http://localhost:3000/users');
  }
  addUser(data:any){
    return this.http.post('http://localhost:3000/users',data);
  }
  deleteUser(data:any){
    return this.http.delete('http://localhost:3000/users/'+data.id);
  }
  editUser(data:any){
    return this.http.put('http://localhost:3000/users/'+data.id,data);
  }
}
