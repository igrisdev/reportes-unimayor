import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRouterLink, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { ReportService } from 'src/app/service/report/report.service';
import { ReportBrigadierService } from 'src/app/service/report-brigadier/report-brigadier.service';

@Component({
  selector: 'app-view-report-brigadier',
  templateUrl: './view-report.page.html',
  styleUrls: ['./view-report.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonRouterLink,
    IonContent,
    CommonModule,
    FormsModule,
    RouterLink,
    HeaderComponent,
  ],
})
export class ViewReportPage {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private reportService = inject(ReportService);
  private reportBrigadierService = inject(ReportBrigadierService);
  private reportId = Number(this.route.snapshot.paramMap.get('id'));

  readonly report = signal<any>([]);

  constructor() {
    addIcons({ arrowBackOutline });
  }

  handleAcceptReport() {
    this.reportBrigadierService.acceptedReport(this.reportId).subscribe({
      next: (data: any) => {
        if (data.status === 200) {
        }
      },
      error: (err) => {
        this.router.navigate(['/user/home']);
        console.log(err);
      },
    });
  }

  handleFinalizeReport() {
    this.reportBrigadierService.finalizeReport(this.reportId).subscribe({
      next: (data: any) => {
        if (data.status === 200) {
        }
      },
      error: (err) => {
        this.router.navigate(['/user/home']);
        console.log(err);
      },
    });
  }

  ngOnInit() {
    this.loadReport();
  }

  private async loadReport() {
    this.reportService.getReport(this.reportId).subscribe({
      next: (data: any) => {
        this.report.set(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
