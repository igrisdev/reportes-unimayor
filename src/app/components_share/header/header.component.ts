import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { decodeJWT } from 'src/app/guard/login.guard';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonToolbar, IonHeader],
})
export class HeaderComponent {
  loginService = inject(LoginService);
  router = inject(Router);

  isBrigadier = this.loginService.isBrigadier;
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

    this.loginService.setBrigadier(isRol);
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
