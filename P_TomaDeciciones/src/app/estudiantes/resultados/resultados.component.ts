import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

public chart: any

  activo!:number;
  reflexivo!:number;
  sensorial!:number;
  intuitivo!:number;
  visual!:number;
  verbal!:number;
  secuencial!:number;
  global!:number;

  constructor( private servicio: AlumnoService ) { }

  ngOnInit(): void {

    this.createChart();
    this.obtenerPerfilAlumno();

  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'radar',
      data: {
        labels: [ 'Activo', 'Sensorial', 'Visual', 'Secuencial', 'Reflexico', 'Intuitivo', 'Verbal', 'Gobal' ],
        datasets: [
          {
            label: 'Tu Perfil',
            data: [],
            backgroundColor: 'rgba(46, 155, 236, 0.5)',
            borderColor: 'rgba(30, 36, 64, 0.6)',
            borderWidth: 1,
            pointBackgroundColor: '#2E9BEC'
          }
        ]
      } 
    })

  }

  obtenerPerfilAlumno() {

    this.servicio.obtenerPerfil( 
      JSON.parse(localStorage.getItem('info_alumno') || "{}")[0].nro_cuenta,
    ).subscribe ( (data) => {

      console.log(data[0].secuencial_global.slice(0, -1));

      if(data[0].activo_reflexivo[data[0].activo_reflexivo.length - 1] == "A") {
        this.activo = data[0].activo_reflexivo.slice(0, -1) * 10 - 10;
        this.reflexivo = 0;
      }
      else {
        this.reflexivo = data[0].activo_reflexivo.slice(0, -1) * 10 - 10;
        this.activo = 0;
      }

      if(data[0].sensorial_intuitivo[data[0].sensorial_intuitivo.length - 1] == "A") {
        this.sensorial = data[0].sensorial_intuitivo.slice(0, -1) * 10 - 10;
        this.intuitivo = 0;
      }
      else {
        this.sensorial = data[0].sensorial_intuitivo.slice(0, -1) * 10 - 10;
        this.intuitivo = 0;
      }

      if(data[0].visual_verbal[data[0].visual_verbal.length - 1] == "A") {
        this.visual = data[0].visual_verbal.slice(0, -1) * 10 - 10;
        this.verbal = 0;
      }
      else {
        this.visual = data[0].visual_verbal.slice(0, -1) * 10 - 10;
        this.verbal = 0;
      }

      if(data[0].secuencial_global[data[0].secuencial_global.length - 1] == "A") {
        this.secuencial = data[0].secuencial_global.slice(0, -1) * 10 - 10;
        this.global = 0;
      }
      else {
        this.global = data[0].secuencial_global.slice(0, -1) * 10 - 10;
        this.secuencial = 0;
      }

      this.chart.data.datasets.forEach((dataset:any) => {
        dataset.data.push(this.activo);
        dataset.data.push(this.sensorial);
        dataset.data.push(this.visual);
        dataset.data.push(this.secuencial);
        dataset.data.push(this.reflexivo);
        dataset.data.push(this.intuitivo);
        dataset.data.push(this.verbal);
        dataset.data.push(this.global);
      });

      console.log(this.chart.data);

      this.chart.update();

    } )

  }

}
