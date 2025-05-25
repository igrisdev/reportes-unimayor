import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonBadge,
  IonRouterLink,
} from '@ionic/angular/standalone';

import { NoReportsComponent } from '../../../../widget/no-reports/no-reports.component';
import { RouterLink } from '@angular/router';
import { Report, ReportsService } from 'src/app/service/reports.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonRouterLink,
    IonBadge,
    IonCardSubtitle,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonLabel,
    IonList,
    IonContent,
    IonCol,
    IonRow,
    IonGrid,
    IonAvatar,
    IonHeader,
    CommonModule,
    FormsModule,
    NoReportsComponent,
    IonListHeader,
    RouterLink,
  ],
})
export class HomePage implements OnInit {
  reports: Report[] = inject(ReportsService).getReports();

  constructor() {}

  ngOnInit() {}
}
