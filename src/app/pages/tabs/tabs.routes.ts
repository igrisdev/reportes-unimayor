import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./user/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./user/history/history.page').then((m) => m.HistoryPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./user/profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'make-report',
        loadComponent: () =>
          import('./user/make-report/make-report.page').then(
            (m) => m.MakeReportPage
          ),
      },
      {
        path: 'view-report',
        loadComponent: () =>
          import('./user/view-report/view-report.page').then(
            (m) => m.ViewReportPage
          ),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
