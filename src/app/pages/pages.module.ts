import { PagesRoutingModule } from './pages-routing.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicOneComponent } from './graphic-one/graphic-one.component';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    GraphicOneComponent,
    PagesComponent,
    ProgressComponent,
  ],
  imports: [
    PagesRoutingModule,
    SharedModule,
  ],
  exports: [
    DashboardComponent,
    GraphicOneComponent,
    PagesComponent,
    ProgressComponent,
  ],
})
export class PagesModule { }
