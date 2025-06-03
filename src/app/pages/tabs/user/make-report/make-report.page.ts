import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonRouterLink, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { RouterLink } from '@angular/router';
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
  ],
})
export class MakeReportPage {
  private fb = inject(FormBuilder);
  private reportsService = inject(ReportsService);

  readonly locations = inject(LocationService).getLocations();

  form = this.fb.group({
    location: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  handleSubmit() {
    this.reportsService.createReport(
      Number(this.form.value.location),
      this.form.value.description!
    );
  }

  constructor() {
    addIcons({
      arrowBackOutline,
    });
  }
}
