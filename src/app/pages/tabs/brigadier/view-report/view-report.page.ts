import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRouterLink, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { ReportBrigadierService } from 'src/app/service/report-brigadier/report-brigadier.service';
import { map, of, switchMap } from 'rxjs';

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
  private reportBrigadierService = inject(ReportBrigadierService);

  private reportId = Number(this.route.snapshot.paramMap.get('id'));

  readonly report = signal<any>([]);

  constructor() {
    addIcons({ arrowBackOutline });
  }

  handleAcceptReport() {
    this.reportBrigadierService.acceptedReport(this.reportId).subscribe({
      next: (data: any) => {},
      error: (err) => {
        this.router.navigate(['/brigadier/home']);
        console.log(err);
      },
    });
  }

  handleFinalizeReport() {
    this.reportBrigadierService.finalizeReport(this.reportId).subscribe({
      next: (data: any) => {},
      error: (err) => {
        this.router.navigate(['/brigadier/home']);
        console.log(err);
      },
    });
  }

  ngOnInit() {
    this.loadReport();
  }

  ionViewWillEnter() {
    this.loadReport();
  }

  private loadReport() {
    this.reportBrigadierService
      .getAllReportsBrigadier()
      .pipe(
        map((data: any) =>
          data.find((report: any) => report.idReporte == this.reportId)
        ),
        switchMap((reportFind: any) => {
          if (reportFind) {
            return of(reportFind);
          }
          return this.reportBrigadierService
            .getReportAcceptedBrigadier()
            .pipe(
              map((data: any) =>
                data.find((report: any) => report.idReporte == this.reportId)
              )
            );
        })
      )
      .subscribe({
        next: (finalReport: any) => {
          this.report.set(finalReport);
        },
        error: (err) => {
          console.error('Error al cargar el reporte:', err);
        },
      });
  }
}
