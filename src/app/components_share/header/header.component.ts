import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonRouterLink,
} from '@ionic/angular/standalone';
import { decodeJWT } from 'src/app/guard/login.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonRouterLink, IonToolbar, IonHeader],
})
export class HeaderComponent {
  router = inject(Router);

  isBrigadier = signal<boolean>(false);
  rol = signal<string>('');

  constructor() {
    this.handleRol();
  }

  handleRol() {
    const token = localStorage.getItem('token');
    const decoded = decodeJWT(token!);

    const path = this.getPath();

    if (path === 'brigadier') {
      this.rol.set('Brigadier');
    } else {
      this.rol.set('Usuario');
    }

    const isRol = decoded.EsBrigadista === 'true' ? true : false;

    this.isBrigadier.set(isRol);
  }

  getPath() {
    const path = this.router.url.split('/')[1];
    return path;
  }

  handleRedirect() {
    const path = this.getPath();

    if (path === 'brigadier') {
      this.router.navigate(['/user']);
      return;
    }

    this.router.navigate([`/brigadier`]);
    return;
  }
}
