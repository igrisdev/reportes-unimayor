import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user',
        loadChildren: () => import('./user/user.routes').then((m) => m.routes),
      },
      {
        path: 'brigadier',
        loadChildren: () =>
          import('./brigadier/brigadier.routes').then((m) => m.routes),
      },
      {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full',
      },
    ],
  },
];
