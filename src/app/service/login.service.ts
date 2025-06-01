import { inject, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { decodeJWT } from '../guard/login.guard';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _http = inject(BaseService);
  router = inject(Router);

  isBrigadier = signal<boolean>(false);

  constructor() {}

  login(email: string, password: string) {
    const url = environment.API_URL + 'auth/login';

    this._http
      .post(url, { correoInstitucional: email, contraseña: password })
      .subscribe((res: any) => {
        this.setTokenLocalStorage(res.token);

        if (res.token) {
          const decoded = decodeJWT(res.token);

          if (decoded.EsBrigadista === 'true') {
            this.setBrigadier(true);
          } else {
            this.setBrigadier(false);
          }

          this.router.navigate(['/user']);
        }
      });
  }

  isLogin() {
    const token = this.getTokenLocalStorage();

    if (token) {
      return this.router.navigate(['/user']);
    }

    return this.router.navigate(['/login']);
  }

  setTokenLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  getTokenLocalStorage(): string | null {
    return localStorage.getItem('token');
  }

  setBrigadier(isBrigadier: boolean) {
    this.isBrigadier.set(isBrigadier);
  }
}
