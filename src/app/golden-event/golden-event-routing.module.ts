import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoldenEventPage } from './golden-event.page';

const routes: Routes = [
  {
    path: '',
    component: GoldenEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoldenEventPageRoutingModule {}
