import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';

import { PlacePage } from './place';

@NgModule({
  declarations: [
    PlacePage,
  ],
  imports: [
    IonicPageModule.forChild(PlacePage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALmSQLO7AybP7TdfRH0qwJTOHU-M98aVM'
    })
  ],
})
export class PlacePageModule {}
