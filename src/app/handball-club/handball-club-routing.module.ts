import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandballClubPage } from './handball-club.page';

const routes: Routes = [
  {
    path: '',
    component: HandballClubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandballClubPageRoutingModule {}
