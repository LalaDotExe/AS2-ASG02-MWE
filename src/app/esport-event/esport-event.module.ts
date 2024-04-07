import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsportEventPageRoutingModule } from './esport-event-routing.module';

import { EsportEventPage } from './esport-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsportEventPageRoutingModule
  ],
  declarations: [EsportEventPage]
})
export class EsportEventPageModule {}
