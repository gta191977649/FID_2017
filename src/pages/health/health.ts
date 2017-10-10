import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as Chart from 'chart.js';


@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {

  @ViewChild('barCanvas',{ read: ElementRef }) barCanvas;
  @ViewChild('sugarChart',{ read: ElementRef }) sugarChart;
  @ViewChild('bloodPressure',{ read: ElementRef }) pressureChart;
  @ViewChild('bloodLipids',{ read: ElementRef }) lipidsChart;



  constructor(public navCtrl: NavController) {
    //this.health = "heart_rate";
  }


  renderHeartRate()
  {
    //let canvas = document.getElementById('bar');

    new Chart(this.barCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri","Sat"],
            datasets: [{
                label: '# of BPM',
                data: [90,100, 80,105, 92, 100,95],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });
  }

  renderBloodSugar()
  {
     new Chart(this.sugarChart.nativeElement, {

        type: 'line',
        data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri","Sat"],
            datasets: [{
                label: '# of RATE',
                data: [90,100, 80,105, 92, 100,70],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });
  }


  renderBloodLipids()
  {
     new Chart(this.lipidsChart.nativeElement, {

        type: 'line',
        data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri","Sat"],
            datasets: [{
                label: '# of RATE',
                data: [1.0,1.2, 0.9,1.4, 1.0, 1.2,1.1],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });
  }

  renderBloodPressure()
  {
     new Chart(this.pressureChart.nativeElement, {

        type: 'line',
        data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri","Sat"],
            datasets: [
            {
              label: '# of Systolic',
              data: [130, 110, 115, 120, 123, 128, 127],
              backgroundColor: 'rgba(255, 159, 64, 0)',
              borderColor: 'rgba(255, 159, 64, 1)',
              borderWidth: 1
            },
            {
              label: '# of Diastolic',
              data: [80, 76, 76, 79, 80, 85, 81],
              backgroundColor: 'rgba(255, 159, 64, 0)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });
  }
  ionViewDidLoad() {
      this.renderHeartRate();
      this.renderBloodSugar();
      this.renderBloodPressure();
      this.renderBloodLipids();
      console.log('ionViewDidLoad Health');

  }

}
