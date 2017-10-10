import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Chart from 'chart.js';

/**
 * Generated class for the SteppyPeopleDetailNoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-steppy-people-detail-no',
  templateUrl: 'steppy-people-detail-no.html',
})
export class SteppyPeopleDetailNoPage {

  @ViewChild('stepsChart',{ read: ElementRef }) stepsChart;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SteppyPeopleDetailNoPage');
    this.renderStepsChart();
  }

  renderStepsChart()
  {
    new Chart(this.stepsChart.nativeElement, {

        type: 'line',
        data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri","Sun"],
            datasets: [{
                label: '# of %',
                data: [40,70, 50,60, 30, 60,80,90,0],
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
