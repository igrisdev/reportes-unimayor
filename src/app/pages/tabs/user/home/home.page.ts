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
  IonBadge,
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
  reports: Report[] = [
    {
      id: 1,
      location: 'Unimayor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam. Ut euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam.',
      date: '2022-01-01 10:00',
      status: 'En Proceso',
    },
    {
      id: 2,
      location: 'Unimayor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam. Ut euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam.',
      date: '2022-01-02 10:00',
      status: 'En Proceso',
    },
    {
      id: 3,
      location: 'Unimayor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam. Ut euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam.',
      date: '2022-01-03 10:00',
      status: 'En Proceso',
    },
    {
      id: 4,
      location: 'Unimayor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam. Ut euismod, nisl eget consectetur molestie, ipsum ligula eleifend magna, vel convallis augue augue eu eros. Nam eget nisi id nisl ultrices aliquam.',
      date: '2022-01-04 10:00',
      status: 'En Proceso',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
