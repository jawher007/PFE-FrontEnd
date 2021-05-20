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

  session:Session;
  testsession: Testsession;

  sessionid: string;
  testrank: string;
  sessionidtest:string;

  idsession: number;
  idsessiontest:number;

  constructor(private SessionService: SessionService, private testsessionservice: TestsessionService) { }

  ngOnInit() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
    
    this.sessionidtest = sessionStorage.getItem('sessionidtest');
    this.sessionid = sessionStorage.getItem('sessionid');
    this.testrank = sessionStorage.getItem('testrank');

    this.idsession = +this.sessionid;
    this.idsessiontest = +this.sessionidtest;

    this.getBySession();
    this.geTestSession();
  }


  getBySession() {
    this.SessionService.getSession(this.idsession)
      .subscribe(data => {

        this.session = data;
      //  this.ngOnInit();

      }, error => console.log(error));



  }


  geTestSession() {
    this.testsessionservice.getTestbySession(this.idsessiontest, this.testrank)
      .subscribe(data => {

        this.testsession = data;
     //   this.ngOnInit();

      }, error => console.log(error));



  }
  generatePdf() {
    console.log("0 %");
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
      html: '#Testprops'
    });
    // Table 2
    (doc as any).autoTable({
      html: '#pdfConvert'
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
        if (data.column.index === 2  && data.cell.section === 'body' && img !== undefined) {
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
    console.log("100 %");
  }



}
