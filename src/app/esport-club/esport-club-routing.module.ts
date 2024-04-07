import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsportClubPage } from './esport-club.page';

const routes: Routes = [
  {
    path: '',
    component: EsportClubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsportClubPageRoutingModule {}
