import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, ReactiveFormsModule],
})
export class LoginPage implements OnInit {
  fg = inject(FormBuilder);

  LoginForm = this.fg.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  constructor() {}

  ngOnInit() {}

  login() {
    console.log(this.LoginForm.value);
  }
}

// this.router.navigate(['/home']);
