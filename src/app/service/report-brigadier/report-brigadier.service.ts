import { inject, Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReportBrigadierService {
  private _http = inject(BaseService);
  private _url = environment.API_URL;

  getAllReportsBrigadier() {
    const path = this._url + 'brigadista/reportes/pendientes';

    return this._http.getWithToken(path);
  }

  getReportAcceptedBrigadier() {
    const path = this._url + 'brigadista/reportes/asignados';

    return this._http.getWithToken(path);
  }

  acceptedReport(id: number) {
    const path = this._url + 'brigadista/reportes/aceptar/' + id;

    return this._http.putWithToken(path);
  }

  finalizeReport(id: number) {
    const path = this._url + 'brigadista/reportes/finalizar/' + id;

    return this._http.putWithToken(path, { estado: 'Finalizado' });
  }

  // getReport(id: number) {
  //   const path = this._url + 'reportes/' + id;

  //   return this._http.getWithToken(path);
  // }
}
