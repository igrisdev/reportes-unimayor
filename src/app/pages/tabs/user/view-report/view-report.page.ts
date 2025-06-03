import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRouterLink, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReportsService, Report } from 'src/app/service/reports.service';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { HeaderComponent } from '../../../../components_share/header/header.component';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.page.html',
  styleUrls: ['./view-report.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonRouterLink,
    IonContent,
    CommonModule,
    FormsModule,
    RouterLink,
    HeaderComponent,
  ],
})
export class ViewReportPage {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private reportService = inject(ReportsService);

  public report = signal<Report | undefined>(undefined);

  private reportId = Number(this.route.snapshot.paramMap.get('id'));

  constructor() {
    addIcons({ arrowBackOutline });

    effect(() => {
      const reportFind = this.reportService.getReport(this.reportId);
      this.report.set(reportFind());
    });
  }

  handleCancelReport() {
    this.reportService.cancelReport(this.reportId);
  }
}
