import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoReportsComponent } from '../../../../widget/no-reports/no-reports.component';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { IonContent } from '@ionic/angular/standalone';
import { CardAcceptComponent } from '../../../../components_share/card-accept/card-accept.component';
import { ReportBrigadierService } from 'src/app/service/report-brigadier/report-brigadier.service';

@Component({
  selector: 'app-home-brigadier',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    NoReportsComponent,
    HeaderComponent,
    CardAcceptComponent,
  ],
})
export class HomePage implements OnInit {
  private reportsService = inject(ReportBrigadierService);
  reports = signal<any>([]);
  myReports = signal<any>([]);

  ngOnInit() {
    this.loadReports();
    this.myLoadReports();
  }

  ionViewWillEnter() {
    this.loadReports();
    this.myLoadReports();
  }

  private async loadReports() {
    this.reportsService.getAllReportsBrigadier().subscribe({
      next: (data: any) => {
        this.reports.set(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  private myLoadReports() {
    this.reportsService.getReportAcceptedBrigadier().subscribe({
      next: (data: any) => {
        const reportInProcess = data.filter(
          (report: any) => report.estado === 'En proceso'
        );

        this.myReports.set(reportInProcess);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
