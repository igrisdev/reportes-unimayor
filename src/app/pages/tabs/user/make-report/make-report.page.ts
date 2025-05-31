import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../../../components_share/header/header.component';

@Component({
  selector: 'app-make-report',
  templateUrl: './make-report.page.html',
  styleUrls: ['./make-report.page.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonContent, HeaderComponent],
})
export class MakeReportPage {
  fb = inject(FormBuilder);

  form = this.fb.group({
    location: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  handleSubmit() {
    console.log(this.form.value);
  }
}
