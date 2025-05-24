import { Routes } from '@angular/router';
import { UserPage } from './user.page';

export const routes: Routes = [
  {
    path: '',
    component: UserPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./history/history.page').then((m) => m.HistoryPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'make-report',
        loadComponent: () =>
          import('./make-report/make-report.page').then(
            (m) => m.MakeReportPage
          ),
      },
      {
        path: 'view-report',
        loadComponent: () =>
          import('./view-report/view-report.page').then(
            (m) => m.ViewReportPage
          ),
      },
      {
        path: '',
        redirectTo: '/user/home',
        pathMatch: 'full',
      },
    ],
  },
];
