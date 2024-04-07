import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpRecordPage } from './ep-record.page';

const routes: Routes = [
  {
    path: '',
    component: EpRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpRecordPageRoutingModule {}
