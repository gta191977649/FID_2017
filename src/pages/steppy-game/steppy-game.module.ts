import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SteppyGamePage } from './steppy-game';

@NgModule({
  declarations: [
    SteppyGamePage,
  ],
  imports: [
    IonicPageModule.forChild(SteppyGamePage),
  ],
})
export class SteppyGamePageModule {}
