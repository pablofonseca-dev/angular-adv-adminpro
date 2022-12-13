import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset } from 'chart.js';


@Component({
  selector: 'app-graphic-one',
  templateUrl: './graphic-one.component.html',
  styles: [
  ]
})
export class GraphicOneComponent implements OnInit {

  doughnutChartLabels: string[] = [
    "Download Sales",
    "In-Store Sales",
    "Unknown Sales"
  ];

  doughnutDatasets: ChartDataset<"doughnut", number[]>[] = [{
    data: [100, 200, 300],
    backgroundColor: [
      "#6857E6",
      "#009FEE",
      "#F02059"
    ]
  }];


  constructor() {

  }

  ngOnInit(): void {

  }
}