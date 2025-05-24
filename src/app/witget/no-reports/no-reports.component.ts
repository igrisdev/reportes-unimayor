import { Component, OnInit } from '@angular/core';
import { IonRow, IonLabel, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-no-reports',
  templateUrl: './no-reports.component.html',
  styleUrls: ['./no-reports.component.scss'],
  imports: [IonCol, IonRow, IonLabel],
})
export class NoReportsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
