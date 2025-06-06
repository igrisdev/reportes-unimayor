import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-link-create-report',
  templateUrl: './link-create-report.component.html',
  styleUrls: ['./link-create-report.component.scss'],
  imports: [IonRouterLink, RouterLink],
})
export class LinkCreateReportComponent {}
