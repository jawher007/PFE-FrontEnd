import { DashboardService } from './../dashboard.service';
import { SessionVideo } from './../sessionvideo';
import { TestvideoService } from './../testvideo.service';
import { TestVideo } from './../testvideo';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import 'jspdf-autotable';


@Component({
  selector: 'app-viewtestvideo',
  templateUrl: './viewtestvideo.component.html',
  styleUrls: ['./viewtestvideo.component.scss']
})
export class ViewtestvideoComponent implements OnInit {
  sessionvideo: SessionVideo;
  testvideo: TestVideo;
  idsessiontest: number;
  testrank: string;
  sessionidtest: string
  sessionid: string;
  idsession: number;
  doc: jsPDF;

  tabledata = [{
    img: 'https://i.picsum.photos/id/258/536/354.jpg',
    name: 'Joseph',
    domain: 'Angular 9'
  },
  {
    img: 'https://i.picsum.photos/id/258/536/354.jpg',
    name: 'Vani',
    domain: 'Angular 8'
  }, {
    img: 'https://i.picsum.photos/id/258/536/354.jpg',
    name: 'Raj',
    domain: 'React.js'
  },
  ];

 
  @ViewChild('myTemp', { static: false }) myTempRef: ElementRef;



  constructor(private testvideoService: TestvideoService, private dashboardService: DashboardService) { }
  
  



  ngOnInit() {
    

    this.testrank = sessionStorage.getItem('testrank');
    this.sessionidtest = sessionStorage.getItem('sessionidtest');
    this.sessionid = sessionStorage.getItem('sessionid');
    this.idsession = +this.sessionid;
    this.idsessiontest = +this.sessionidtest;
    this.show();
    this.getBySession();

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    console.log("image");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }

  getBySession() {
    this.dashboardService.getSessionVideo(this.idsession)
      .subscribe(data => {
        this.sessionvideo = data;
        //  this.ngOnInit();
      }, error => console.log(error));
  }
  
  show() {
    this.testvideoService.getTestbySession(this.idsessiontest, this.testrank)
      .subscribe(data => {

        this.testvideo = data;
        this.testvideo.screen1;

      }, error => console.log(error));


  }
  /*
  generatePdfa() {
    var pdf = new jsPDF();

    pdf.setFontSize(15);
    pdf.text('Angular PDF Table', 11, 8);
    pdf.setFontSize(12);
    pdf.setTextColor(99);


    (pdf as any).autoTable({
    head: "this.header",
    body: this.tableData,
    theme: 'plain',
    didDrawCell: data => {
        console.log(data.column.index)
    }
    })

    // Open PDF document in browser's new tab
    pdf.output('dataurlnewwindow')

    // Download PDF doc  
    pdf.save('table.pdf');
}  */


  
 

generatePdf() {
    const doc = new jsPDF('l');
    // Heading
    (doc as any).autoTable({
      columnStyles: {
        0: { cellWidth: 40, fillColor: '#fff', fontStyle: 'bold', fontSize: '11', textColor: '#000' },
        1: { cellWidth: 20, fillColor: '#fff', fontStyle: 'normal', fontSize: '11', textColor: '#fc0' },
        2: { fillColor: '#fff', fontStyle: 'normal', fontSize: '11', textColor: '#000' },
 
      }, // Cells in first column centered and green
      body: [
        ['Test Case with VideoRecording', 'Date', new Date()]
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
 
        }
        
      }
    });
 
   
  
 
    doc.save('TestCase.pdf');
 
  }

}


 
  /*
  
    generatePdf() {
      var imgData;
    
      for(var i=0;i<this.images.length;i++){
      var div = document.getElementById('img'+i);
      const options = { background: "white", height: div.clientHeight, width: div.clientWidth };
      
      html2canvas(div).then((canvas) => {
        //Initialize JSPDF
        let doc = new jsPDF();
        //Converting canvas to Image
        imgData = canvas.toDataURL("image/PNG");
        //Add image Canvas to PDF
        doc.addImage(imgData, "JPG", 10, (i+1)*10, 180, 150);
  
        doc.addPage();
        doc.save('Test.pdf');
      });
     
    
    }
   
    }*/


  






  
     





