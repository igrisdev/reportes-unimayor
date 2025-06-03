import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private _http = inject(HttpClient);

  constructor() {}

  private getHeaders() {
    const token = localStorage.getItem('token');
    return { Authorization: `Bearer ${token}` };
  }

  get(url: string) {
    return this._http.get(url);
  }

  getWithToken(url: string) {
    return this._http.get(url, { headers: this.getHeaders() });
  }

  post(url: string, body: any) {
    return this._http.post(url, body);
  }

  postWithToken(
    url: string,
    body: { idUbicacion: number; descripcion: string }
  ) {
    return this._http.post(url, body, { headers: this.getHeaders() });
  }

  putWithToken(url: string, body: any) {
    return this._http.put(url, body, { headers: this.getHeaders() });
  }
}
