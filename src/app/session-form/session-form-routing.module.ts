import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionFormPage } from './session-form.page';

const routes: Routes = [
  {
    path: '',
    component: SessionFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionFormPageRoutingModule {}
