import { PieComponent } from './shared/widgets/pie/pie.component';
import { UpdateissueComponent } from './updateissue/updateissue.component';
import { UpdatefeedbackComponent } from './updatefeedback/updatefeedback.component';
import { ViewtestvideoComponent } from './viewtestvideo/viewtestvideo.component';
import { ViewtestComponent } from './viewtest/viewtest.component';
import { ScreentimeComponent } from './screentime/screentime.component';
import { StattestsessionComponent } from './stattestsession/stattestsession.component';
import { DefaultscreenshotsComponent } from './defaultscreenshots/defaultscreenshots.component';
import { CardComponent } from './shared/widgets/card/card.component';
import { PortalComponent } from './portal/portal.component';
import { IssuesComponent } from './issues/issues.component';
import { ShowfeedbackComponent } from './showfeedback/showfeedback.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilComponent } from './profil/profil.component';
import { ListofusersComponent } from './listofusers/listofusers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LogInComponent } from './log-in/log-in.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';














const routes: Routes = [
  {path: 'Screenshots',component: DefaultscreenshotsComponent,canActivate:[AuthGuard],
  children: [{
    path: '',
    component: StattestsessionComponent,canActivate:[AuthGuard]
  },
  {
    path: 'screen',
    component: ScreentimeComponent,canActivate:[AuthGuard]
  }]
},
{path: 'home',component: DefaultComponent,canActivate:[AuthGuard],
  children: [{
    path: 'VideoTest',
    component: DashboardComponent,canActivate:[AuthGuard]
  }, {
    path: 'posts',
    component: PostsComponent,canActivate:[AuthGuard]
  },
  {
    path: 'card',
    component: CardComponent,canActivate:[AuthGuard]
  },{
    path: '',
    component: StatisticsComponent,canActivate:[AuthGuard]
  }]
}, 
{ path:'charts',component:PieComponent,canActivate:[AuthGuard]},
{ path:'portal',component:PortalComponent,canActivate:[AuthGuard]},
{ path:'showissues',component:IssuesComponent,canActivate:[AuthGuard]},
{ path:'showfeedback',component:ShowfeedbackComponent,canActivate:[AuthGuard]},
{ path:'updatefeedback',component:UpdatefeedbackComponent,canActivate:[AuthGuard]},
{ path:'updateissue',component:UpdateissueComponent,canActivate:[AuthGuard]},
{ path:'feedback',component:FeedbackComponent,canActivate:[AuthGuard]},
{ path:'statistics',component:StatisticsComponent,canActivate:[AuthGuard]},
{ path:'listofusers',component:ListofusersComponent,canActivate:[AuthGuard]},
{ path:'profil',component:ProfilComponent,canActivate:[AuthGuard]},
{ path:'contact',component:ContactComponent,canActivate:[AuthGuard]},
{ path:'viewtest',component:ViewtestComponent,canActivate:[AuthGuard]},
{ path:'viewtestvideo',component:ViewtestvideoComponent,canActivate:[AuthGuard]},
{ path: 'login',  component: LogInComponent },
{ path: '',   redirectTo: '/login', pathMatch: 'full' },
{ path: 'register', component: RegisterComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
