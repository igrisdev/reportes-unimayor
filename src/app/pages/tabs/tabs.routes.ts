import { Routes } from '@angular/router';
import { authGuard } from 'src/app/guard/login.guard';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user',
        loadChildren: () => import('./user/user.routes').then((m) => m.routes),
        canActivate: [authGuard],
      },
      {
        path: 'brigadier',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./brigadier/brigadier.routes').then((m) => m.routes),
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
    ],
  },
];
