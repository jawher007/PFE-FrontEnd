import { TestvideoService } from './../../../testvideo.service';
import { TestsessionService } from './../../../testsession.service';
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Testsession } from './../../../testsession';
import { TestVideo } from './../../../testvideo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  HighchartsScreen = Highcharts;
  HighchartsVideo = Highcharts;
  chartOptions = {};
  chartOptions1 = {};

  testvideo: TestVideo;
  testvideos: TestVideo[] = [];

  testsession: Testsession;
  testsessions: Testsession[] = [];

  passedscreen: number;
  failedscreen: number;

  passedvideo: number;
  failedvideo: number;

  pv:number;
  fv:number;
  ps:number;
  fs:number;

  constructor(private testsessionService: TestsessionService,private router: Router, private testvideoService: TestvideoService) { }

  ngOnInit() {
   
    this.pv=+sessionStorage.getItem('passedvideo');
     
    this.fv=+sessionStorage.getItem('failedvideo');
     
    this.ps=+sessionStorage.getItem('passedscreen');

     
    this.fs=+sessionStorage.getItem('failedscreen');
 
    this.charts();
  
  
    }

charts(){

  var data = [{
    name: 'Test Passed',
    y: this.ps,
    sliced: true,
    selected: true
  }, {
    name: 'Test Failed',
    y: this.fs
  }];
  console.log('after');
 var data1 = [{
    name: 'Test Passed',
    y: this.pv,
    sliced: true,
    selected: true
  }, {
    name: 'Test Failed',
    y: this.fv
  }];
  

  this.chartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Test Status With Screenshots'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    exporting: {
      enabled: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: data
    }]
  };

  HC_exporting(Highcharts);

  this.chartOptions1 = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Test Status With VideoRecording'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    exporting: {
      enabled: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: data1
    }]
  };

  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
}
 

}