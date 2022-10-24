import { Component, OnInit } from '@angular/core';
import { Preguntas } from './Preguntas.model';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  Cuestionario: Preguntas[];

  constructor() { 
    this.Cuestionario = [
      new Preguntas(1, '2.- ¿Preguntas del cuestionario del sistema de recomendacion de estilos de aprendizaje?', 'Respuesta 1', 'Respuesta 2'),
      new Preguntas(2, '2.- ¿Preguntas del cuestionario del sistema de recomendacion de estilos de aprendizaje?', 'Respuesta 1', 'Respuesta 2'),
      new Preguntas(3, '2.- ¿Preguntas del cuestionario del sistema de recomendacion de estilos de aprendizaje?', 'Respuesta 1', 'Respuesta 2')
    ]
  }

  ngOnInit(): void {
  }

}
