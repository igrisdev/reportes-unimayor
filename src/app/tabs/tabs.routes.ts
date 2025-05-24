import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      // {
      //   path: 'tab3',
      //   loadComponent: () =>
      //     import('../tab3/tab3.page').then((m) => m.Tab3Page),
      // },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full',
  },
];
