import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
} from '@ionic/angular/standalone';

import { NoReportsComponent } from '../../../../witget/no-reports/no-reports.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCol,
    IonRow,
    IonGrid,
    IonAvatar,
    IonHeader,
    CommonModule,
    FormsModule,
    NoReportsComponent,
  ],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
