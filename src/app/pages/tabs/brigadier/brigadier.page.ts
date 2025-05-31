import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  time,
  home,
  personCircle,
  addOutline,
  alertCircle,
} from 'ionicons/icons';

@Component({
  selector: 'app-brigadier',
  templateUrl: './brigadier.page.html',
  styleUrls: ['./brigadier.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonTabButton,
    IonTabBar,
    IonTabs,
    CommonModule,
    FormsModule,
  ],
})
export class BrigadierPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ time, alertCircle, personCircle, addOutline });
  }

  ngOnInit() {}
}
