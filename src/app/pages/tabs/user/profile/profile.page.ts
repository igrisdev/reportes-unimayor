import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { ReportsService } from 'src/app/service/reports.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonIcon,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class ProfilePage implements OnInit {
  private loginService = inject(LoginService);
  private reportService = inject(ReportsService);

  router = inject(Router);

  constructor() {
    addIcons({ logOutOutline });
  }

  ngOnInit() {}

  logout() {
    localStorage.removeItem('token');
    this.loginService.setBrigadier(false);
    this.reportService.cleanReports();
    this.router.navigate(['/login']);
  }
}
