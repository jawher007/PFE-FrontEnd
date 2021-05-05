import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:21929/api/SessionVideo'; 


@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor(private http: HttpClient) { }
  

  // delete test 
  deleteSessionVideo(sessionid: number): Observable<any> {
    return this.http.delete(`${baseUrl}/DeleteSessionVideo/${sessionid}`, { responseType: 'text' });
  }


  ​
  // get session
  getSessionVideo(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/GetIdSessionVideo/${id}`);
  }


 // get all sessions
  getVideoSessions(): Observable<any> {
    return this.http.get(`${baseUrl}/GetSessionsVideos`);
  }
}
