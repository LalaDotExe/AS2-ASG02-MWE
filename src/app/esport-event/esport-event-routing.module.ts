import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsportEventPage } from './esport-event.page';

const routes: Routes = [
  {
    path: '',
    component: EsportEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsportEventPageRoutingModule {}
