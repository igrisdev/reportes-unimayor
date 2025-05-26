import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

import { NoReportsComponent } from '../../../../widget/no-reports/no-reports.component';
import { Report, ReportsService } from 'src/app/service/reports.service';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { CardAcceptComponent } from '../../../../components_share/card-accept/card-accept.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    NoReportsComponent,
    HeaderComponent,
    CardAcceptComponent,
  ],
})
export class HomePage implements OnInit {
  reports: Report[] = inject(ReportsService).getReportsInProgress();

  constructor(private router: Router) {}

  ngOnInit() {}

  onCardClick(event: MouseEvent, reportId: number) {
    if (!(event.target as HTMLElement).closest('.accept-button')) {
      this.router.navigate(['/brigadier/view-report', reportId]);
    }
  }

  onAcceptReport(event: Event, reportId: number) {
    event.stopPropagation();

    console.log('Reporte aceptado:', reportId);
  }
}
