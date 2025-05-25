import { Component, OnInit } from '@angular/core';
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
  IonButton,
  IonThumbnail,
  IonBadge,
  IonNav,
  IonRouterLink,
} from '@ionic/angular/standalone';

import { NoReportsComponent } from '../../../../widget/no-reports/no-reports.component';
import { RouterLink } from '@angular/router';

interface Report {
  id: number;
  location: string;
  description: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonRouterLink,
    IonNav,
    IonBadge,
    IonCardSubtitle,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonButton,
    IonItem,
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
    IonThumbnail,
    IonListHeader,
    RouterLink,
  ],
})
export class HomePage implements OnInit {
  reports: Report[] = new Array(4).fill({
    id: 1,
    location: 'Unimayor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam. Ut euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam.',
    date: '2022-01-01 10:00',
    status: 'En Proceso',
  });

  constructor() {}

  ngOnInit() {}
}
