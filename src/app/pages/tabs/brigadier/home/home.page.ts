import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoReportsComponent } from '../../../../widget/no-reports/no-reports.component';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { LinkCreateReportComponent } from 'src/app/widget/link-create-report/link-create-report.component';
import { IonContent } from '@ionic/angular/standalone';
import { ReportService } from 'src/app/service/report/report.service';
import { CardAcceptComponent } from '../../../../components_share/card-accept/card-accept.component';

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
    LinkCreateReportComponent,
    HeaderComponent,
    CardAcceptComponent,
  ],
})
export class HomePage implements OnInit {
  private reportsService = inject(ReportService);
  reports = signal<any>([]);

  ngOnInit() {
    this.loadReports();
  }

  ionViewWillEnter() {
    this.loadReports();
    console.log('Brigadier -------------------------------');
  }

  private async loadReports() {
    this.reportsService.getAllReports().subscribe({
      next: (data: any) => {
        const reportProcess = data.filter(
          (report: any) => report.estado === 'Pendiente'
        );

        this.reports.set(reportProcess);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
