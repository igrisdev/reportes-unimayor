import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonListHeader,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonBadge,
  IonRouterLink,
  IonList,
} from '@ionic/angular/standalone';
import { ReportsService } from 'src/app/service/reports.service';
import { RouterLink } from '@angular/router';
import { NoReportsComponent } from '../../../../widget/no-reports/no-reports.component';
import { HeaderComponent } from '../../../../components_share/header/header.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonRouterLink,
    IonBadge,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonLabel,
    IonListHeader,
    IonAvatar,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    RouterLink,
    NoReportsComponent,
    HeaderComponent,
  ],
})
export class HistoryPage implements OnInit {
  private reportService = inject(ReportsService);

  reports = this.reportService.getReports();

  constructor() {}

  ngOnInit() {}
}
