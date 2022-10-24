import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor() { }

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
