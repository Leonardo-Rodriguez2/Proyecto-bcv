import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

    @Input() dolarValue: number | null = null;
    @Input() getFechaHoraActual : any;

}
