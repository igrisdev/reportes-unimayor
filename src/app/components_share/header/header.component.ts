import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonGrid,
  IonAvatar,
  IonRow,
  IonCol,
  IonContent,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonTitle,
    IonToolbar,
    IonContent,
    IonCol,
    IonRow,
    IonAvatar,
    IonGrid,
    IonHeader,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
