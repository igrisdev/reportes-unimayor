import { computed, inject, Injectable, signal, Signal } from '@angular/core';
import { BaseService } from '../base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private baseService = inject(BaseService);
  private locations = signal<any>([]);

  constructor() {
    this.loadLocations();
  }

  private loadLocations() {
    const path = environment.API_URL + 'ubicaciones';
    this.baseService.get(path).subscribe((res) => this.locations.set(res));
  }

  getLocations() {
    return computed(() => {
      return this.locations();
    });
  }
}
