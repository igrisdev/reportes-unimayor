import { Component, OnInit, signal } from '@angular/core';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { decodeJWT } from 'src/app/guard/login.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonToolbar, IonHeader],
})
export class HeaderComponent implements OnInit {
  brigadier = signal<boolean>(false);

  rol = signal<string>('');

  constructor() {
    this.isBrigadier();
  }

  ngOnInit() {}

  isBrigadier() {
    const token = localStorage.getItem('token');
    if (!token) return;

    const decoded = decodeJWT(token!);

    if (decoded.EsBrigadista == true) {
      this.rol.set('brigadier');
    } else {
      this.rol.set('usuario');
    }

    return this.brigadier.set(decoded.EsBrigadista);
  }
}
