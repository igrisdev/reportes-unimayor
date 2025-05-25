import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonIcon,
  IonAvatar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
import { HeaderComponent } from '../../../../components_share/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonIcon,
    IonAvatar,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class ProfilePage implements OnInit {
  constructor(private router: Router) {
    addIcons({ logOutOutline });
  }

  ngOnInit() {}

  logout() {
    // Add your logout logic here
    this.router.navigate(['/login']);
  }
}
