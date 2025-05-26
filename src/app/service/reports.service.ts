import { Injectable } from '@angular/core';

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
  private reports: Report[] = [
    {
      id: 1,
      location: 'Unimayor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam. Ut euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam.',
      date: '2022-01-01 10:00',
      status: 'En Proceso',
    },
    {
      id: 2,
      location: 'Unimayor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam. Ut euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam.',
      date: '2022-01-02 10:00',
      status: 'Terminado',
    },
    {
      id: 3,
      location: 'Unimayor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam. Ut euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam.',
      date: '2022-01-03 10:00',
      status: 'Terminado',
    },
    {
      id: 4,
      location: 'Unimayor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam. Ut euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam.',
      date: '2022-01-04 10:00',
      status: 'Terminado',
    },
  ];

  constructor() {}

  getReports(): Report[] {
    return this.reports;
  }

  getReport(id: number): Report | null {
    return this.reports.find((report) => report.id === id) || null;
  }

  getReportsInProgress(): Report[] {
    return this.reports.filter((report) => report.status === 'En Proceso');
  }
}
