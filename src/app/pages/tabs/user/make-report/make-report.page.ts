import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonRouterLink, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { LocationService } from 'src/app/service/location/location.service';
import { ReportService } from 'src/app/service/report/report.service';

@Component({
  selector: 'app-make-report',
  templateUrl: './make-report.page.html',
  styleUrls: ['./make-report.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonRouterLink,
    CommonModule,
    ReactiveFormsModule,
    IonContent,
    HeaderComponent,
    RouterLink,
  ],
})
export class MakeReportPage {
  private fb = inject(FormBuilder);
  private reportService = inject(ReportService);
  private router = inject(Router);

  readonly locations = inject(LocationService).getLocations();

  form = this.fb.group({
    location: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  constructor() {
    addIcons({
      arrowBackOutline,
    });
  }

  handleSubmit() {
    this.reportService
      .createReport(
        Number(this.form.value.location),
        this.form.value.description!
      )
      .subscribe({
        next: (data: any) => {
          console.log(data);
          if (data.status === 201) {
            // this.router.navigate(['/user/home']);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
