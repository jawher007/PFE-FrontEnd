import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

const baseUrl = 'http://localhost:21929/api/TestVideo'; 

@Injectable({
  providedIn: 'root'
})
export class TestvideoService {

  constructor(private http: HttpClient) { }

   // get tests by session
   getTestbyID(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/GetIdTestVideo/${id}`);
  }
 
  getTestbyStatus(status: string): Observable<any> {
    return this.http.get(`${baseUrl}/GetTestVideoByState/${status}`);
  }

  //get all tests
  getTests(): Observable<any> {
    return this.http.get(`${baseUrl}/GetTestsVideos`);
  }
  
  getTestbySession(idsession: number,testrank:string): Observable<any> {
    return this.http.get(`${baseUrl}/GetTestVideoSession/${idsession}/${testrank}`);
  }

  deleteTestVideo(sessionid: number): Observable<any> {
    return this.http.delete(`${baseUrl}/DeleteTestVideo/${sessionid}`, { responseType: 'text' });
  }
  
}
