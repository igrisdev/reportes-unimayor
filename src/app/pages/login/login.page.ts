import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, AlertController } from '@ionic/angular/standalone';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, ReactiveFormsModule],
})
export class LoginPage implements OnInit {
  login = inject(LoginService);
  fg = inject(FormBuilder);

  LoginForm = this.fg.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  constructor() {}

  ngOnInit() {
    this.login.isLogin();
  }

  handleLogin() {
    this.login.login(
      this.LoginForm.value.email ?? '',
      this.LoginForm.value.password ?? ''
    );
  }
}
