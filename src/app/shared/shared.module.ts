import { UpdateissueComponent } from './../updateissue/updateissue.component';
import { UpdatefeedbackComponent } from './../updatefeedback/updatefeedback.component';
import { StattestsessionComponent } from './../stattestsession/stattestsession.component';
import { SidebarscreenComponent } from './../sidebarscreen/sidebarscreen.component';
import { PortalComponent } from './../portal/portal.component';
import { IssuesComponent } from './../issues/issues.component';
import { ShowfeedbackComponent } from './../showfeedback/showfeedback.component';
import { FeedbackComponent } from './../feedback/feedback.component';
import { ProfilComponent } from './../profil/profil.component';
import { ContactComponent } from './../contact/contact.component';
import { ListofusersComponent } from './../listofusers/listofusers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule,MatTabsModule,MatSortModule,MatPaginatorModule,MatTableModule,MatMenuModule,MatSnackBarModule,MatDividerModule,MatInputModule,MatAutocompleteModule,MatCardModule,MatFormFieldModule,MatToolbarModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogInComponent } from '../log-in//log-in.component';
import { RegisterComponent } from '../register/register.component';
import {MatSelectModule} from '@angular/material/select';
import { NavbarLoginRegisterComponent } from '../navbar-login-register/navbar-login-register.component';
import { MenuComponent } from '../menu/menu.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { GridModule } from '@progress/kendo-angular-grid';

















@NgModule({
  declarations: [
    PortalComponent,
    IssuesComponent,
    ShowfeedbackComponent,
    ProfilComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    LogInComponent,
    RegisterComponent,
    NavbarLoginRegisterComponent,
    MenuComponent,
    ListofusersComponent,
    FeedbackComponent,
    SidebarscreenComponent,
    StattestsessionComponent,
    UpdatefeedbackComponent,
    UpdateissueComponent


  ],
  imports: [

    MatDialogModule,
    GridModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    ScrollingModule,
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatCardModule,
    MatTabsModule
    

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    SidebarscreenComponent,
    StattestsessionComponent
  ]
})
export class SharedModule { }
