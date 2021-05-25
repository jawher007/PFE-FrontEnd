import { SessionService } from './../session.service';
import { TestsessionService } from './../testsession.service';
import { Component, OnInit } from '@angular/core';
import { Session } from './../session';
import { Testsession } from './../testsession';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import 'jspdf-autotable';

@Component({
  selector: 'app-viewtest',
  templateUrl: './viewtest.component.html',
  styleUrls: ['./viewtest.component.scss']
})
export class ViewtestComponent implements OnInit {
  showsuccess:boolean;
  showbutton: boolean;
  session: Session;
  testsession: Testsession;
  sessionid: string;
  testrank: string;
  sessionidtest: string;
  contentup:boolean;
  idsession: number;
  idsessiontest: number;

  constructor(private SessionService: SessionService, private testsessionservice: TestsessionService) { }

  ngOnInit() {
    

    this.sessionidtest = sessionStorage.getItem('sessionidtest');
    this.sessionid = sessionStorage.getItem('sessionid');
    this.testrank = sessionStorage.getItem('testrank');

    this.idsession = +this.sessionid;
    this.idsessiontest = +this.sessionidtest;

    this.getBySession();
    this.geTestSession();
  }

  toggle(){
    
    if ( this.contentup===true){
      this.contentup=false ;
    }else {
      this.contentup=true ;
    }

  }


  getBySession() {
    this.SessionService.getSession(this.idsession)
      .subscribe(data => {

        this.session = data;
  

      }, error => console.log(error));



  }


  geTestSession() {
    this.testsessionservice.getTestbySession(this.idsessiontest, this.testrank)
      .subscribe(data => {

        this.testsession = data;

        if (this.testsession.teststatus === 'passed') {
          this.showsuccess = true;
        }

        else {
          this.showsuccess = false;
        }



      }, error => console.log(error));



  }
  
  generatePdf(): void {

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
      html: '#Testpropser'
    });
    // Table 2
    (doc as any).autoTable({
      html: '#pdfConverter'
    });
    // Table 3
    (doc as any).autoTable({
      html: '#imgTable',
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

    console.log("90 %");


    doc.save('TestCase.pdf');
  }



  generatePdferror(): void {

    new Promise<void>((resolve) => {
      setTimeout(() => {
        this.showbutton = true;
        resolve();
      }
        , 500);

    })
      .then(_ => new Promise<void>(resolve => {
        setTimeout(() => {
          this.pdferror();
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


  pdferror() {
    const doc = new jsPDF('l');
    // Heading
    console.log("5 %");
    
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
      html: '#Testpropserror'
    });
    // Table 2
    (doc as any).autoTable({
      html: '#pdfConverterror'
    });
    
    console.log("90 %");


    doc.save('TestCase.pdf');
  }


}
