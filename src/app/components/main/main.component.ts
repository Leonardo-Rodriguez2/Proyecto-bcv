import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SectionOptionComponent } from '../section.option/section.option.component';

@Component({
  selector: 'app-main',
  imports: [FormsModule, SectionOptionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent { 

  @Input() dolarValue: number | null = null;

  public valueDolar: number | null = null;

  // funcion que calcula el valor del Input con el valor del Dolar

  convertir(): any {
    if (
      this.valueDolar !== null &&
      this.dolarValue !== null &&
      this.dolarValue !== 0
    ) {
      return (this.valueDolar * this.dolarValue).toFixed(2);
    }
  }

  // funcion que devuelve la fecha actual

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
