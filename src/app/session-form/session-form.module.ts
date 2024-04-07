import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionFormPageRoutingModule } from './session-form-routing.module';

import { SessionFormPage } from './session-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionFormPageRoutingModule
  ],
  declarations: [SessionFormPage]
})
export class SessionFormPageModule {}
