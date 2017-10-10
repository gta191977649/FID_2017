import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SteppyMapPage } from './steppy-map';

@NgModule({
  declarations: [
    SteppyMapPage,
  ],
  imports: [
    IonicPageModule.forChild(SteppyMapPage),
  ],
})
export class SteppyMapPageModule {}
