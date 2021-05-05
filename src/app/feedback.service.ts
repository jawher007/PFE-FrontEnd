import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:21929/api/Feedback';
const baseUrl1 = 'http://localhost:21929/api/Issues';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  // feedbacks

  createFeedback(feedback: Object): Observable<Object> {
    return this.http.post(`${baseUrl}/AddFeedback`, feedback);
  }

  getFeedback():Observable<any> {
    return this.http.get(`${baseUrl}/GetFeedbacks`);
  }


  deletefeedback(id:number):Observable<any> {
    return this.http.delete(`${baseUrl}/DeleteFeedback/${id}`);
  }
  
  updatefeedback(feedback: Object):Observable<any> {
    return this.http.put(`${baseUrl}/EditFeedback`,feedback);
  }

  getFeedbackById(id:number):Observable<any> {
    return this.http.get(`${baseUrl}/GetIdFeedback/${id}`);
  }



  // issues
  createIssues(issue: Object): Observable<Object> {
    return this.http.post(`${baseUrl1}/AddIssue`, issue);
  }

  getIssues():Observable<any> {
    return this.http.get(`${baseUrl1}/GetIssue`);
  }

  deleteissue(id:number):Observable<any> {
    return this.http.delete(`${baseUrl1}/DeleteIssue/${id}`);
  }
  
  updateissue(issue: Object):Observable<any> {
    return this.http.put(`${baseUrl1}/EditIssue`,issue);
  }
 
  getIssueById(id:number):Observable<any> {
    return this.http.get(`${baseUrl1}/GetIdIssue/${id}`);
  }
  
  
}


