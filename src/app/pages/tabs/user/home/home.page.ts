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
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonContent,
    IonCol,
    IonRow,
    IonGrid,
    IonAvatar,
    IonHeader,
    CommonModule,
    FormsModule,
  ],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
