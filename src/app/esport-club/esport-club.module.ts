import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsportClubPageRoutingModule } from './esport-club-routing.module';

import { EsportClubPage } from './esport-club.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsportClubPageRoutingModule
  ],
  declarations: [EsportClubPage]
})
export class EsportClubPageModule {}
