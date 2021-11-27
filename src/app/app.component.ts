import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemploPipes';
  nameSing = 'Min Yoon-Gi'; //Añadiendo variable

  Listadokorean = ["Seok-Jin"," Chae-Euwon", " Jackson Wang", " Jung Ho-Seok"];//List

  PI = Math.PI; //Number

  NumbPorcentaje = 0.5891; //Porcentaje

  supportSustenance = 435000.5;//Currency

  persona = {
    nombre: 'Kang',
    apellido: 'Song',
    profesion: 'Actor',
    competencia: ['Trabajo en equipo', 'Buen desempeño'],
    canalyoutube: 'No hay',
    direccion: {
      calle: '56',
      carrera: '34',
      ciudad: 'Seul'
    }
  } //JSON

  myDate = new Date();

  password = 'A564646';
  enable = true;
}
