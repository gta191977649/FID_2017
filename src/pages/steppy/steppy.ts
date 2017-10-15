import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SteppyGamePage } from '../steppy-game/steppy-game';
import { SteppyMapPage } from '../steppy-map/steppy-map';
import * as Chart from 'chart.js';

@Component({
  selector: 'page-steppy',
  templateUrl: 'steppy.html',
})

export class Steppy {
  @ViewChild('walkChart',{ read: ElementRef }) walkChart;
  @ViewChild('progressChart',{ read: ElementRef }) progressChart;

  constructor(public navCtrl: NavController) {
  }
  toSteppyGamePage()
  {
    this.navCtrl.push(SteppyGamePage);
    
  }
  toSteppyMapPage()
  {
    this.navCtrl.push(SteppyMapPage);
    
  }
  ionViewDidLoad() {
    this.renderWalkChart();
    this.renderProgressChart();
  }
  
  renderWalkChart()
  {
    new Chart(this.walkChart.nativeElement, {
      
        type: 'line',
        data: {
            labels: ["25", "26", "27", "28", "29", "30"],
            datasets: [{
                label: '# of Steps',
                data: [1400,1300, 500,800, 1920, 1000,1500,1200],
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
  
   
  renderProgressChart()
  {
    new Chart(this.progressChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["Progress"],
        datasets: [{
          backgroundColor: [
            "#3498db",
            "#FFFFFF",
          ],
          data: [100,0]
        }]
      }
    });
  }
}
