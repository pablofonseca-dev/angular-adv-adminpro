import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit, OnChanges {

  doughnutChartType: ChartType = 'doughnut';

  @Input('labels') doughnutChartLabels: string[] = ["Label A", "Label B", "Label C"];
  @Input('datasets') doughnutChartDatasets: ChartDataset<"doughnut", number[]>[] = [];
  @Input('title') doughnutChartTitle: string = "No Title";

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{
      data: [1, 2, 3],
    }],
  };

  ngOnInit(): void {
  }

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: this.doughnutChartDatasets
    };
  }
}