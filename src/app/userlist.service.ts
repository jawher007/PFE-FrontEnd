import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:21929/api/UserList'; 

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private http: HttpClient) { }
  // get user by id
    getUserByid(username: string): Observable<any> {
      return this.http.get(`${baseUrl}/GetIdUser/${username}`);
    }
  
    // delete user 
    deleteUser(id:string): Observable<any> {
      return this.http.delete(`${baseUrl}/DeleteUser/${id}`, { responseType: 'text' });
    }
   // get all users
    getUserList() {
      return this.http.get(`${baseUrl}/GetUserList`);
    }


  
}
