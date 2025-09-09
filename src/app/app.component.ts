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

    this.recargarPagina();
  }

  // Funcion para realizar una recargar de la pagina cada 6 horas para refrescar el valor del dolar

  recargarPagina() {
    setTimeout(() => {
      window.location.reload();
    }, 10800000);
  }


}
