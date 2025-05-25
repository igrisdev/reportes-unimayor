import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonInput,
  IonButton,
  IonLabel,
  IonCheckbox,
  AlertController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonInput,
    IonButton,
    IonLabel,
    IonCheckbox,
  ],
})
export class LoginPage implements OnInit {
  credentials = {
    email: '',
    password: '',
    rememberMe: false,
  };

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Check if user is already logged in
    const savedCredentials = localStorage.getItem('credentials');
    if (savedCredentials) {
      // Auto-login or redirect as needed
    }
  }

  async login() {
    // Here you would implement your actual authentication logic
    // This is just a placeholder example

    if (this.credentials.email && this.credentials.password) {
      // Save credentials if remember me is checked
      if (this.credentials.rememberMe) {
        localStorage.setItem('credentials', JSON.stringify(this.credentials));
      }

      // Navigate to home or dashboard page after successful login
      this.router.navigate(['/home']);
    } else {
      // Show error alert
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor ingrese un correo y contraseña válidos',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
