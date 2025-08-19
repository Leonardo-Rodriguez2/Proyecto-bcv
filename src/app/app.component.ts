import { Component } from '@angular/core';
import { ApiDolarService } from './services/api-dolar.service';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bcv-dolar';
  dolarData: any;
  public dolarValue: number = 0;
  public fechaActualizacion: string = ''

  constructor(private ApiDolarService: ApiDolarService) {
    this.ApiDolarService.getDolar().subscribe({
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


  getFechaHoraActual(): string {
  const ahora = new Date();
  const dia = ahora.getDate().toString().padStart(2, '0');
  const mes = (ahora.getMonth() + 1).toString().padStart(2, '0');
  const anio = ahora.getFullYear();
  const horas = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');
  return `${dia}/${mes}/${anio}`;
}

}
