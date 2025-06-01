import { inject, Injectable, OnInit, signal } from '@angular/core';
import { BaseService } from './base.service';

import { environment } from 'src/environments/environment';

export interface Report {
  id: number;
  location: string;
  description: string;
  date: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  private _http = inject(BaseService);
  private _url = environment.API_URL;

  reports = signal([]);

  constructor() {
    console.log('---------------------------------------------');
    this.getReports();
  }

  getReports() {
    this._http.get(this._url + 'reportes').subscribe({
      next: (data) => {
        // this.reports.set([]);
      },
      error: (err) => {
        console.log(err);
      },
    });

    return [];
  }

  getReport(id: number): Report | [] {
    // return this.reports.find((report) => report.id === id) || null;
    return [];
  }

  getReportsInProgress(): Report[] {
    // return this.reports.filter((report) => report.status === 'En Proceso');
    return [];
  }
}
