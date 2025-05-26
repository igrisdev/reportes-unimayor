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

  onCardClick(event: Event, reportId: number | undefined | null) {
    event.stopPropagation(); // Esto evita que el evento click se propague al router-link
    event.preventDefault(); // Esto previene cualquier comportamiento por defecto
    // Tu lógica para manejar el click del botón aquí
  }
}
