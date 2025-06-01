import { inject, Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _http = inject(BaseService);
  router = inject(Router);

  constructor() {}

  login(email: string, password: string) {
    const url = environment.API_URL + 'auth/login';

    this._http
      .post(url, { correoInstitucional: email, contraseña: password })
      .subscribe((res: any) => {
        this.setTokenLocalStorage(res.token);

        if (res.token) {
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
}
