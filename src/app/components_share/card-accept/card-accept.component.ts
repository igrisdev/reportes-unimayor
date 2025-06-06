import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonRouterLink } from '@ionic/angular/standalone';
import { Report } from 'src/app/service/report/report.service';

@Component({
  selector: 'app-card-accept',
  templateUrl: './card-accept.component.html',
  styleUrls: ['./card-accept.component.scss'],
  imports: [IonRouterLink, RouterLink],
})
export class CardAcceptComponent {
  readonly report = input<Report>();

  onCardClick(event: Event, reportId: number | undefined | null) {
    event.stopPropagation();
    event.preventDefault();
  }
}
