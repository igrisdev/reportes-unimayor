import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonBadge,
  IonRouterLink,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';

import { NoReportsComponent } from '../../../../widget/no-reports/no-reports.component';
import { RouterLink } from '@angular/router';
import { Report, ReportsService } from 'src/app/service/reports.service';
import { LinkCreateReportComponent } from '../../../../widget/link-create-report/link-create-report.component';
import { HeaderComponent } from '../../../../components_share/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonIcon,
    IonRouterLink,
    IonBadge,
    IonCardSubtitle,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonLabel,
    IonList,
    IonContent,
    IonCol,
    IonRow,
    IonGrid,
    IonAvatar,
    IonHeader,
    CommonModule,
    FormsModule,
    NoReportsComponent,
    IonListHeader,
    RouterLink,
    LinkCreateReportComponent,
    HeaderComponent,
  ],
})
export class HomePage implements OnInit {
  reports: Report[] = inject(ReportsService).getReports();

  constructor(private router: Router) {}

  ngOnInit() {}

  // Maneja el clic en la tarjeta
  onCardClick(event: MouseEvent, reportId: number) {
    // Navega a la página de vista de reporte solo si el clic no fue en el botón Aceptar
    if (!(event.target as HTMLElement).closest('.accept-button')) {
      this.router.navigate(['/brigadier/view-report', reportId]);
    }
  }

  // Maneja el clic en el botón Aceptar
  onAcceptReport(event: Event, reportId: number) {
    // Detiene la propagación para evitar que el clic llegue a la tarjeta
    event.stopPropagation();

    // Registra en la consola que se hizo clic en Aceptar
    console.log('Reporte aceptado:', reportId);

    // Aquí puedes agregar la lógica para aceptar el reporte
  }
}
