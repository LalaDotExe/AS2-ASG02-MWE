import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageClubPageRoutingModule } from './manage-club-routing.module';

import { ManageClubPage } from './manage-club.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageClubPageRoutingModule
  ],
  declarations: [ManageClubPage]
})
export class ManageClubPageModule {}
