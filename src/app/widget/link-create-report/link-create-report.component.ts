import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonRouterLink, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-link-create-report',
  templateUrl: './link-create-report.component.html',
  styleUrls: ['./link-create-report.component.scss'],
  imports: [IonRouterLink, IonIcon, RouterLink],
})
export class LinkCreateReportComponent implements OnInit {
  constructor() {
    addIcons({ addOutline });
  }

  ngOnInit() {}
}
