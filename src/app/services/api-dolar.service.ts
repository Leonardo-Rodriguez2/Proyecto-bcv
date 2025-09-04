import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDolarService {

  readonly http = inject(HttpClient)

  getDolar(api: any): Observable<any> {
    return this.http.get(api);
  }

}
