import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SteppyPeopleDetailPage } from './steppy-people-detail';

@NgModule({
  declarations: [
    SteppyPeopleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SteppyPeopleDetailPage),
  ],
})
export class SteppyPeopleDetailPageModule {}
