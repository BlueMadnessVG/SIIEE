import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    InicioComponent, 
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ]
})
export class EstudiantesModule { }
