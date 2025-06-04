import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { Report, ReportsService } from 'src/app/service/reports.service';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { CardStatusComponent } from '../../../../components_share/card-status/card-status.component';
import { NoReportsComponent } from '../../../../widget/no-reports/no-reports.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    CardStatusComponent,
    NoReportsComponent,
  ],
})
export class HistoryPage implements OnInit {
  private reportService = inject(ReportsService);

  reports = this.reportService.getReports();

  constructor() {}

  ngOnInit() {}
}
