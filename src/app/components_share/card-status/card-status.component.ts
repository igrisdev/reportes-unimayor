import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
  imports: [IonRouterLink, RouterLink],
})
export class CardStatusComponent {
  readonly report = input();
}
