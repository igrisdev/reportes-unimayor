import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonGrid,
  IonAvatar,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonCol, IonRow, IonAvatar, IonGrid, IonHeader],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
