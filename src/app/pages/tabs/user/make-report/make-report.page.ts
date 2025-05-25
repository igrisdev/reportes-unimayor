import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonNote,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../../../components_share/header/header.component';

@Component({
  selector: 'app-make-report',
  templateUrl: './make-report.page.html',
  styleUrls: ['./make-report.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonNote,
    HeaderComponent,
  ],
})
export class MakeReportPage implements OnInit {
  reportForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reportForm = this.fb.group({
      location: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.reportForm.valid) {
      console.log(this.reportForm.value);
      // Here you can add your submit logic
    }
  }
}
