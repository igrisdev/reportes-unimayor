import { computed, inject, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';

import { environment } from 'src/environments/environment';

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
export class ReportsService {
  private _http = inject(BaseService);
  private _url = environment.API_URL;

  reports = signal<Report[]>([]);

  constructor() {
    this.loadReports();
  }

  private loadReports() {
    this._http.getWithToken(this._url + 'reportes').subscribe({
      next: (data) => {
        const newData = data as Report[];
        this.reports.set(newData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getReports() {
    return this.reports();
  }

  getReport(id: number) {
    return computed(() => {
      const findReport = this.reports();
      return findReport.find((report) => report.idReporte === id);
    });
  }

  getReportsInProgress() {
    return computed(() => {
      const allReports = this.reports();
      return allReports.filter((report) => report.estado === 'Pendiente');
    });
  }
}
