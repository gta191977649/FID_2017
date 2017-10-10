import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SteppyFoodVideoPage } from '../steppy-food-video/steppy-food-video';
import { SteppyPeopleDetailNoPage } from '../steppy-people-detail-no/steppy-people-detail-no';
import { SteppyPeopleDetailPage } from '../steppy-people-detail/steppy-people-detail';

import * as Chart from 'chart.js';
/**
 * Generated class for the SteppyGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-steppy-game',
  templateUrl: 'steppy-game.html',
})
export class SteppyGamePage {
  @ViewChild('progressChart',{ read: ElementRef }) progressChart;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.steppyGame = "steps";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SteppyGamePage');
  }
  toSteppyFoodVideoPage()
  {
    this.navCtrl.push(SteppyFoodVideoPage);
  }
  toPeopleNoWalk()
  {
    this.navCtrl.push(SteppyPeopleDetailNoPage);
  }
  toPeopleWalk()
  {
    this.navCtrl.push(SteppyPeopleDetailPage);
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
          data: [70,30]
        }]
      }
    });
  }

}
