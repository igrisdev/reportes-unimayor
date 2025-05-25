import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonGrid,
  IonRow,
  IonAvatar,
  IonCol,
  IonRouterLink,
  IonIcon,
} from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReportsService, Report } from 'src/app/service/reports.service';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.page.html',
  styleUrls: ['./view-report.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonRouterLink,
    IonCol,
    IonAvatar,
    IonRow,
    IonGrid,
    IonLabel,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
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

    console.log(this.report());
  }
}
