import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:21929/api/Session'; 

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { 
    
  }
// get session
  getSession(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/GetIdSession/${id}`);
  }

 
  deleteSession(sessionid: number): Observable<any> {
    return this.http.delete(`${baseUrl}/DeleteSession/${sessionid}`, { responseType: 'text' });
  }

 // get all sessions
  getSessions(): Observable<any> {
    return this.http.get(`${baseUrl}/GetSessions`);
  }
}
