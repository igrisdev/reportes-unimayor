import { computed, inject, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

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
  private router = inject(Router);

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
    // return computed(() => {
    return this.reports();
    // });
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

  createReport(location: number, description: string) {
    const path = environment.API_URL + 'reportes';

    this._http
      .postWithToken(path, { idUbicacion: location, descripcion: description })
      .subscribe({
        next: (data) => {
          const newData = data as Report;
          this.reports.update((reports) => {
            return [...reports, newData];
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  cancelReport(id: number) {
    const path = environment.API_URL + 'reportes/cancelar/' + id;

    this._http.putWithToken(path, { estado: 'Cancelado' }).subscribe({
      next: (data) => {
        const newData = data as Report;

        this.reports.update((reports) => {
          return reports.map((report) => {
            if (report.idReporte === id) {
              return newData;
            }
            return report;
          });
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
