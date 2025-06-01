import { inject, Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _http = inject(BaseService);

  constructor() {
    console.log('LoginService');
  }
}
