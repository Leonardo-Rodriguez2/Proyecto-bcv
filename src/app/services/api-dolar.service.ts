import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDolarService {

  public API_URL = "https://ve.dolarapi.com/v1/dolares/oficial";
  readonly http = inject(HttpClient)

  getDolar(): Observable<any> {
    return this.http.get(this.API_URL);
  }

}
