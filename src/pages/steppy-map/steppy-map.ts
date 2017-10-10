import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SteppyPeopleDetailPage } from '../steppy-people-detail/steppy-people-detail'

/**
 * Generated class for the SteppyMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-steppy-map',
  templateUrl: 'steppy-map.html',
})
export class SteppyMapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SteppyMapPage');
  }

  toSteppyPeopleDetailPage()
  {
    this.navCtrl.push(SteppyPeopleDetailPage);
  }

}
