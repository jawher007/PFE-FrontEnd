import { TestvideoService } from './testvideo.service';
import { TestsessionService } from './testsession.service';
import { SessionService } from './session.service';
import { FeedbackService } from './feedback.service';
import { UserlistService } from './userlist.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { DashboardService } from './modules/dashboard.service';
import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient,HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { StyleManagerService } from './style-manager.service';
import { ThemeService } from './theme.service';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './user.service';
import { GeneralinfoComponent } from './generalinfo/generalinfo.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { BrowsercapibilitiesComponent } from './browsercapibilities/browsercapibilities.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { FormsModule } from '@angular/forms';











 







@NgModule({
  declarations: [
    AppComponent,
    GeneralinfoComponent,
    VideoplayerComponent,
    BrowsercapibilitiesComponent,
    SplashscreenComponent,
 
    
 



    
    
 
  
    
    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    GridModule,
   
  ],
  providers: [ThemeService,StyleManagerService,UserService,TestvideoService,TestsessionService,UserlistService,FeedbackService,SessionService,DashboardService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
