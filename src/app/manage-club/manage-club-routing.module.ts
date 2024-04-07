import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageClubPage } from './manage-club.page';

const routes: Routes = [
  {
    path: '',
    component: ManageClubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageClubPageRoutingModule {}
