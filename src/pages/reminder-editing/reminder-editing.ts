import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReminderPage } from '../reminder/reminder';
@Component({
  selector: 'page-reminder-editing',
  templateUrl: 'reminder-editing.html',
})
export class ReminderEditing {

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReminderEditing');
  }

  toReminder()
  {
    this.navCtrl.push(ReminderPage);
    
  }

}
