import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRouterLink, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
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
export class ViewReportPage implements OnInit {
  private route = inject(ActivatedRoute);
  private reportService = inject(ReportsService);

  report = signal<Report | null>(null);

  constructor() {
    addIcons({ arrowBackOutline });
  }

  ngOnInit() {
    const reportId = Number(this.route.snapshot.paramMap.get('id'));

    const reportFind = this.reportService.getReport(reportId);

    this.report.set(reportFind);
  }
}
