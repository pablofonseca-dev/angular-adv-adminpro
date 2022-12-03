import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CounterComponent
  ]
})
export class ComponentsModule { }
