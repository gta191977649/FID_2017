import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HealthPage } from '../health/health';
import { ReminderPage } from '../reminder/reminder';
import { Steppy } from '../Steppy/Steppy';
import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  toHealth()
  {
    this.navCtrl.push(HealthPage);

  }
  toReminder()
  {
    this.navCtrl.push(ReminderPage);
  }

  toSteppy()
  {
    this.navCtrl.push(Steppy);
  }
  toSetting()
  {
    this.navCtrl.push(SettingPage);
  }
}
