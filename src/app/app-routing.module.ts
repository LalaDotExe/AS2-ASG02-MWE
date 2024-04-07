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
  {
    path: 'esport-event',
    loadChildren: () => import('./esport-event/esport-event.module').then( m => m.EsportEventPageModule)
  },
  {
    path: 'esport-club',
    loadChildren: () => import('./esport-club/esport-club.module').then( m => m.EsportClubPageModule)
  },
  {
    path: 'golden-event',
    loadChildren: () => import('./golden-event/golden-event.module').then( m => m.GoldenEventPageModule)
  },
  {
    path: 'handball-club',
    loadChildren: () => import('./handball-club/handball-club.module').then( m => m.HandballClubPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
