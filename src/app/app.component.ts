import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-demo';

  /**
   * Variables demo_2
   */
  informacion: Array<{ codigo: number, nombre: string, apellido: string, sueldo: number }> = Array(
    { codigo: 1, nombre: "Daniela", apellido: "Rodriguez", sueldo: 100000 },
    { codigo: 2, nombre: "Daniel", apellido: "Rodriguez", sueldo: 200000 },
    { codigo: 3, nombre: "Monica", apellido: "Chance", sueldo: 50000 }
  )
}
