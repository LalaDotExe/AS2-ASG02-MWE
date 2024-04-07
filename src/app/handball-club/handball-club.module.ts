import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandballClubPageRoutingModule } from './handball-club-routing.module';

import { HandballClubPage } from './handball-club.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HandballClubPageRoutingModule
  ],
  declarations: [HandballClubPage]
})
export class HandballClubPageModule {}
