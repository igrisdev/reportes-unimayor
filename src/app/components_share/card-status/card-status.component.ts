import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonRouterLink } from '@ionic/angular/standalone';
import { Report } from 'src/app/service/reports.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
  imports: [IonRouterLink, RouterLink],
})
export class CardStatusComponent {
  readonly report = input<Report>();
}
