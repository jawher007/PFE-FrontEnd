import { ViewtestvideoComponent } from './../../viewtestvideo/viewtestvideo.component';
import { ViewtestComponent } from './../../viewtest/viewtest.component';

import { TestsessionService } from './../../testsession.service';

import { ScreentimeComponent } from './../../screentime/screentime.component';
import { DefaultscreenshotsComponent } from './../../defaultscreenshots/defaultscreenshots.component';
import { StatisticsComponent } from './../../statistics/statistics.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';










@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    StatisticsComponent,
    DefaultscreenshotsComponent,
    ScreentimeComponent,
    ViewtestComponent,
    ViewtestvideoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VgBufferingModule,
    VgCoreModule,
    VgControlsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    ScrollingModule
  ],
  providers: [
    DashboardService,TestsessionService
  ]
})
export class DefaultModule { }
