import { Component, OnInit, effect, inject, signal } from '@angular/core';
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
export class HomePage implements OnInit {
  private reportsService = inject(ReportsService);
  reports = signal<any>([]);

  constructor() {
    effect(() => {
      const reports = this.reportsService.getReportsInProgress();
      this.reports.set(reports());
    });
  }

  async ngOnInit() {
    await this.loadReports();
  }

  ionViewWillEnter() {
    this.loadReports();
  }

  private async loadReports() {
    try {
      this.reportsService.loadReports();
    } catch (error) {
      console.error('Error loading reports:', error);
    }
  }
}
