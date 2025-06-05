import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { NoReportsComponent } from '../../../../widget/no-reports/no-reports.component';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { CardStatusComponent } from '../../../../components_share/card-status/card-status.component';
import { LinkCreateReportComponent } from '../../../../widget/link-create-report/link-create-report.component';
import { ReportService } from 'src/app/service/report/report.service';

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
export class HistoryPage implements OnInit {
  private reportsService = inject(ReportService);
  reports = signal<any>([]);

  ngOnInit() {
    this.loadReports();
  }

  ionViewWillEnter() {
    this.loadReports();
  }

  private async loadReports() {
    this.reportsService.getAllReports().subscribe({
      next: (data: any) => {
        const sortReports = data.sort((a: any, b: any) => {
          return a.fechaCreacion > b.fechaCreacion ? -1 : 1;
        });

        this.reports.set(sortReports);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
