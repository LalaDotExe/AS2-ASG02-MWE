import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoldenEventPageRoutingModule } from './golden-event-routing.module';

import { GoldenEventPage } from './golden-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoldenEventPageRoutingModule
  ],
  declarations: [GoldenEventPage]
})
export class GoldenEventPageModule {}
