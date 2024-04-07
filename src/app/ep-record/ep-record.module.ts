import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpRecordPageRoutingModule } from './ep-record-routing.module';

import { EpRecordPage } from './ep-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpRecordPageRoutingModule
  ],
  declarations: [EpRecordPage]
})
export class EpRecordPageModule {}
