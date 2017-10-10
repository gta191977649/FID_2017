import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReminderEditing } from '../reminder-editing/reminder-editing';

@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {

  
  constructor(public navCtrl: NavController) {
    //this.reminder = "mediciene";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Reminder');
  }
  toReminderEdit()
  {
    this.navCtrl.push(ReminderEditing);
  }


}
