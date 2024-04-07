import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'tab4',
    loadChildren: () =>
      import('./ProfilePage/tab4.module').then((m) => m.Tab4PageModule),
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('./feedback/feedback.module').then((m) => m.FeedbackPageModule),
  },
  {
    path: 'aboutus',
    loadChildren: () =>
      import('./aboutus/aboutus.module').then((m) => m.AboutusPageModule),
  },  {
    path: 'ep-record',
    loadChildren: () => import('./ep-record/ep-record.module').then( m => m.EpRecordPageModule)
  },
  {
    path: 'manage-club',
    loadChildren: () => import('./manage-club/manage-club.module').then( m => m.ManageClubPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
