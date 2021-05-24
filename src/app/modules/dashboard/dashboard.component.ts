import { ViewtestvideoComponent } from './../../viewtestvideo/viewtestvideo.component';
import { TestvideoService } from './../../testvideo.service';
import { TestVideo } from './../../testvideo';
import { SessionVideo } from './../../sessionvideo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './../../dashboard.service';
import { MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import 'jspdf-autotable';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})



export class DashboardComponent implements OnInit {
  storedNames:TestVideo[];
  testvideo:TestVideo[]=[];
  sessionvideo:SessionVideo;
  sessionid:string;
  id:number;
  showbutton:boolean;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService, private router: Router,private testvideoService: TestvideoService, public dialoge: MatDialog) { }
  ngOnInit() {  
this.sessionsshow();
this.testshow();
    }

  sessionsshow() {
    this.sessionid = sessionStorage.getItem('sessionid');
    this.id = +this.sessionid;
    this.dashboardService.getSessionVideo(this.id)
      .subscribe(data => {
        this.sessionvideo = data;
      }, error => console.log(error));

  }

  testshow(){
    this.sessionid = sessionStorage.getItem('sessionidsessionid');
    this.id = +this.sessionid;
    this.testvideoService.getTestbyID(this.id)
      .subscribe(data => {       
        this.testvideo = data;
      }, error => console.log(error));

  }

  viewtest(sessionid: number, testrank: string) {
    sessionStorage.setItem('sessionidtest', sessionid + "");
    sessionStorage.setItem('testrank', testrank);
    const dialogRef = this.dialoge.open(ViewtestvideoComponent, {
      autoFocus: false,
      maxHeight: '90vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  foo() {

    // extract checked attribut array as a result [val1,val2]
    
      let checkedStrings = this.testvideo.reduce((acc, eachGroup) => {
        if (eachGroup.checked) {
          acc.push(eachGroup.id)
        }
        return acc
      }, []);
    
      console.log(checkedStrings);
    // get object of checked value and pushit to tab [] resultat of pdf will be generated as pdf 
      let tab =[];
      for (let [i, user] of this.testvideo.entries()) {
        for (let i of checkedStrings  )
        if (user.id == +i) {
         tab.push(user);
        }
     }
     sessionStorage.setItem("tabletopdf1", "");
     sessionStorage.setItem("tabletopdf1", JSON.stringify(tab));
     console.log(tab);
    }
    
    
    
    
    
    
    
    /////////////// PDF GENERATION 
    
    generatePdf(): void {
      this.storedNames = JSON.parse(sessionStorage.getItem("tabletopdf1")); 
    
      new Promise<void>((resolve) => {
        setTimeout(() => {
          this.showbutton = true;
          resolve();
        }
          , 500);
    
      })
        .then(_ => new Promise<void>(resolve => {
          setTimeout(() => {
            this.pdf();
            resolve();
          }
            , 250);
        })
        )
        .then(_ => new Promise<void>(resolve => {
          this.showbutton = false;
        })
        );
    
    
    
    
    
    
    
    }
    
    
    pdf() {
      const doc = new jsPDF('l');
        // Heading
        console.log("5 %");
        this.ngOnInit();
        this.showbutton = true;
        console.log(this.showbutton);
        (doc as any).autoTable({
    
          columnStyles: {
            0: { cellWidth: 40, fillColor: '#fff', fontStyle: 'bold', fontSize: '11', textColor: '#000' },
            1: { cellWidth: 20, fillColor: '#fff', fontStyle: 'normal', fontSize: '11', textColor: '#fc0' },
            2: { fillColor: '#fff', fontStyle: 'normal', fontSize: '11', textColor: '#000' },
    
          }, // Cells in first column centered and green
          body: [
            ['Test Case with Screenshots', 'Date', new Date()]
          ],
        });
        // Table 1
        (doc as any).autoTable({
          html: '#Testprops'
        });
        // Table 2
        (doc as any).autoTable({
          html: '#pdfConvert'
        });
             // Table 3
      for (let i=0;i<this.storedNames.length;i++){
    
      (doc as any).autoTable({
        html: '#imgTable'+i,
        bodyStyles: { minCellHeight: 20 },
        theme: 'grid',
        styles: { valign: 'middle', overflow: 'linebreak', halign: 'center', minCellHeight: 21 },
        pageBreak: 'avoid',
        columnStyles: {
          2: { cellWidth: 100, minCellHeight: 80 },
    
        },
        headStyles: { fillColor: '#f2f2f2', textColor: '#000', fontStyle: 'bold', lineWidth: 0.5, lineColor: '#ccc' },
        didDrawCell: (data) => {
          const td = data.cell.raw;
          const img = td.getElementsByTagName('img')[0];
          if (data.column.index === 2 && data.cell.section === 'body' && img !== undefined) {
            const td = data.cell.raw;
            const img = td.getElementsByTagName('img')[0];
            // let dim = data.cell.height - data.cell.padding('vertical');
            // let textPos = data.cell.textPos;
            doc.addImage(img.src, data.cell.x + 1, data.cell.y + 1, 95, 77);
            console.log("50 %");
          }
          console.log("75 %");
        }
      });
    
      
      }
      console.log("90 %");
    
    
      doc.save('TestCase.pdf');
     
    }
    

  }

