import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonToolbar, IonHeader],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
