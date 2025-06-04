import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { NoReportsComponent } from '../../../../widget/no-reports/no-reports.component';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { CardStatusComponent } from '../../../../components_share/card-status/card-status.component';
import { LinkCreateReportComponent } from '../../../../widget/link-create-report/link-create-report.component';
import { ReportStore } from 'src/app/store/reports/reports/reports.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    NoReportsComponent,
    HeaderComponent,
    CardStatusComponent,
    LinkCreateReportComponent,
  ],
})
export class HistoryPage {
  readonly store = inject(ReportStore);

  reports = this.store.reports;

  constructor() {
    this.store.loadReports();
  }
}
