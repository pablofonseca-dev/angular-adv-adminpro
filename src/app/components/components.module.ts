import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';

import { CounterComponent } from './counter/counter.component';
import { DoughnutComponent } from './doughnut/doughnut.component';


@NgModule({
  declarations: [
    CounterComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [
    CounterComponent,
    DoughnutComponent,
  ]
})
export class ComponentsModule { }
