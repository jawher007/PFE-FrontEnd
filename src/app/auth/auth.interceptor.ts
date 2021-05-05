import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(req,next){
      let tokenizeReq=req.clone({
          setHeaders:{
              Authorization:'Bearer '+sessionStorage.getItem('token')
          }
      })
    return next.handle(tokenizeReq);
}
}