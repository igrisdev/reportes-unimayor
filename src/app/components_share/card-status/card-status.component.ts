import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonRouterLink } from '@ionic/angular/standalone';
import { Report } from 'src/app/service/report/report.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
  imports: [IonRouterLink, RouterLink],
})
export class CardStatusComponent {
  readonly report = input<Report>();

  public router = inject(Router);

  path = '';

  constructor() {
    const path = this.router.url.split('/');
    this.path = path[1];
  }
}
