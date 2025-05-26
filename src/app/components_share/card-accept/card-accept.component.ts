import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonRouterLink } from '@ionic/angular/standalone';
import { Report } from 'src/app/service/reports.service';

@Component({
  selector: 'app-card-accept',
  templateUrl: './card-accept.component.html',
  styleUrls: ['./card-accept.component.scss'],
  imports: [IonRouterLink, RouterLink],
})
export class CardAcceptComponent implements OnInit {
  readonly report = input<Report>();

  constructor() {}

  ngOnInit() {}

  onCardClick(event: MouseEvent) {
    // if (!(event.target as HTMLElement).closest('.accept-button')) {
    // this.router.navigate(['/brigadier/view-report', this.report.id]);
    // }
  }
}
