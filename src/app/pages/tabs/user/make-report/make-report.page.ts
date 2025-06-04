import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonRouterLink, IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { LocationService } from 'src/app/service/location/location.service';
import { ReportsService } from 'src/app/service/reports.service';

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
    IonSpinner,
  ],
})
export class MakeReportPage {
  private fb = inject(FormBuilder);
  private reportsService = inject(ReportsService);
  private router = inject(Router);

  readonly locations = inject(LocationService).getLocations();
  readonly isSubmitting = signal(false);

  form = this.fb.group({
    location: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  async handleSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    try {
      this.reportsService.createReport(
        Number(this.form.value.location),
        this.form.value.description!
      );
      this.router.navigate(['/user/home']); // Corrected path
    } catch (error) {
      console.error('Error creating report:', error);
      // Optionally, show an error message to the user
    } finally {
      this.isSubmitting.set(false);
    }
  }

  constructor() {
    addIcons({
      arrowBackOutline,
    });
  }
}
