import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:21929/api/Test'; 


@Injectable({
  providedIn: 'root'
})
export class TestsessionService {

  constructor(private http: HttpClient) { }

  // get tests by session
  getTestbyID(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/GetIdTest/${id}`);
  }

  getTestbyStatus(status: string): Observable<any> {
    return this.http.get(`${baseUrl}/GetTestByState/${status}`);
  }

  //get all tests
  getTests(): Observable<any> {
    return this.http.get(`${baseUrl}/GetTests`);
  }

  getTestbySession(idsession: number,testrank:string): Observable<any> {
    return this.http.get(`${baseUrl}/GetTestSession/${idsession}/${testrank}`);
  }

  deleteTest(sessionid: number): Observable<any> {
    return this.http.delete(`${baseUrl}/DeleteTest/${sessionid}`, { responseType: 'text' });
  }

}
