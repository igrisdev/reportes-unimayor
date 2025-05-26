import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
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
    IonButton,
    IonIcon,
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
    this.router.navigate(['/user/home']);
  }
}
