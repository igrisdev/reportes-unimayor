import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base.service';

export interface Report {
  idReporte: number;
  ubicacion: Location;
  descripcion: string;
  estado: string;
  fechaCreacion: string;
  horaCreacion: string;
}

export interface Location {
  idUbicacion: number;
  nombre: string;
  descripcion: string;
  sede: string;
  edificio: string;
  salon: string;
  informacionAdicional: string;
  reportes?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private _http = inject(BaseService);
  private _url = environment.API_URL;

  getAllReports() {
    const path = this._url + 'reportes';

    return this._http.getWithToken(path);
  }

  getReport(id: number) {
    const path = this._url + 'reportes/' + id;

    return this._http.getWithToken(path);
  }

  createReport(location: number, description: string) {
    const path = this._url + 'reportes';

    return this._http.postWithToken(path, {
      idUbicacion: location,
      descripcion: description,
    });
  }

  cancelReport(id: number) {
    const path = environment.API_URL + 'reportes/cancelar/' + id;

    return this._http.putWithToken(path, { estado: 'Cancelado' });
  }
}
