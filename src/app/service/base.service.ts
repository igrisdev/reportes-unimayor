import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private _http = inject(HttpClient);

  constructor() {}

  get(url: string) {
    return this._http.get(url);
  }
}
