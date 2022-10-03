import { Component, OnInit } from '@angular/core';
import { Lista } from './lista.model';
import { ChartData, ChartType, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  Listas: Lista[];
  Description: string;

  constructor() {
    this.Listas = [
      new Lista('Nombre encuesta', 'Francisco Figueroa', true, 'https://www.youtube.com/watch?v=HtRZDWaAgRw', 'Descripcion mamalona del estilo de aprendizaje recomendado para el grupo seleccionado, relleno  relleno  relleno  relleno relleno  relleno'),
      new Lista('Nombre encuesta', 'Francisco Figueroa', true, 'https://www.youtube.com/watch?v=HtRZDWaAgRw', 'hola'),
      new Lista('Nombre encuesta', 'Francisco Figueroa', true, 'https://www.youtube.com/watch?v=HtRZDWaAgRw', 'hola'),
      new Lista('Nombre encuesta', 'Francisco Figueroa', false, 'https://www.youtube.com/watch?v=HtRZDWaAgRw', 'asdas'),
    ]

    this.Description = 'Seleccione una encuesta para ver la descripcion';
  }

  OnClick(Des: any){
    this.Description = Des;
  }

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#ffffff'
        }       
      },
    }
  };
  public radarChartLabels: string[] = [ 'Activo', 'Sensorial', 'Visual', 'Secuencial', 'Reflexico', 'Intuitivo', 'Verbal', 'Gobal' ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [ 70, 40, 100, 80, 30, 60, 0, 20], label: 'Estadisticas',
        backgroundColor: 'rgba(46, 155, 236, 0.5)',
        borderColor: 'rgba(30, 36, 64, 0.6)',
        borderWidth: 1,
        pointBackgroundColor: '#2E9BEC'
      },
      
    ]
  };
  public radarChartType: ChartType = 'radar';
  

  ngOnInit(): void {

  }

}
