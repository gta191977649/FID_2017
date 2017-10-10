import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HealthPage } from '../pages/health/health';

import { ReminderPage } from '../pages/reminder/reminder';
import { ReminderEditing } from '../pages/reminder-editing/reminder-editing';
import { Steppy } from '../pages/Steppy/Steppy';
import { SteppyGamePage } from '../pages/steppy-game/steppy-game';
import { SteppyMapPage } from '../pages/steppy-map/steppy-map';
import { SteppyFoodVideoPage } from '../pages/steppy-food-video/steppy-food-video';
import { SteppyPeopleDetailPage } from '../pages/steppy-people-detail/steppy-people-detail';
import { SteppyPeopleDetailNoPage } from '../pages/steppy-people-detail-no/steppy-people-detail-no';
import { SettingPage } from '../pages/setting/setting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HealthPage,
    ReminderPage,
    ReminderEditing,
    Steppy,
    SteppyGamePage,
    SteppyMapPage,
    SteppyFoodVideoPage,
    SteppyPeopleDetailPage,
    SteppyPeopleDetailNoPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HealthPage,
    ReminderPage,
    ReminderEditing,
    Steppy,
    SteppyGamePage,
    SteppyMapPage,
    SteppyFoodVideoPage,
    SteppyPeopleDetailPage,
    SteppyPeopleDetailNoPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
