import { Component } from '@angular/core';
import { ApiDolarService } from './services/api-dolar.service';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [ MainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bcv-dolar';
  dolarData: any;
  public dolarValue: number = 0;
  public fechaActualizacion: string = ''

  public api = "https://ve.dolarapi.com/v1/dolares/oficial";

  constructor(private ApiDolarService: ApiDolarService) {
    
    this.ApiDolarService.getDolar(this.api).subscribe({
      next: (data: any) => {
        this.dolarData = data;
        console.log('Datos del dólar obtenidos:', data);
        this.dolarValue = data.promedio;
        this.fechaActualizacion = data.fecha_actualizacion;
      },
      error: (e) => {
        console.error('Error al obtener usuarios:', e);
      }
    });

    this.recargarCada6Horas();
  }

  recargarCada6Horas() {
    setTimeout(() => {
      window.location.reload();
    }, 10800000);
  }


}
