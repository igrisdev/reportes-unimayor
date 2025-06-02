import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NoReportsComponent } from '../../../../widget/no-reports/no-reports.component';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { CardStatusComponent } from '../../../../components_share/card-status/card-status.component';
import { LinkCreateReportComponent } from 'src/app/widget/link-create-report/link-create-report.component';
import { ReportsService } from 'src/app/service/reports.service';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    NoReportsComponent,
    LinkCreateReportComponent,
    HeaderComponent,
    CardStatusComponent,
  ],
})
export class HomePage {
  private reportService = inject(ReportsService);

  reports = signal<any[]>([]);

  constructor() {
    const reportsFromServiceSignal = this.reportService.getReportsInProgress();

    effect(() => {
      const currentFilteredReports = reportsFromServiceSignal();
      this.reports.set(currentFilteredReports);
    });
  }
}
