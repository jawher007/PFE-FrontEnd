import { Injectable } from '@angular/core';
import {BehaviorSubject} from'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {
  
  private messageSource = new BehaviorSubject<number>(47);
  currentMessage=this.messageSource.asObservable();

  constructor() { }

  changeMessage(message:number){
    this.messageSource.next(message);

  }
}
