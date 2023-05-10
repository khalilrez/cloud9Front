import { Component, AfterViewInit, ViewChild, ElementRef,  OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { PharmacyService } from '../services-pharamcies-percentage/pharmacy.service';
import { error } from 'jquery';
import { Percentage } from '../models pharmacy order percentage/Percentage';

@Component({
  selector: 'app-chartpharamcy',
  templateUrl: './chartpharamcy.component.html',
  styleUrls: ['./chartpharamcy.component.css']
})
export class ChartpharamcyComponent implements OnInit{

  title = 'ng2-charts-demo';

  // Doughnut
  public doughnutChartLabels: string[] = [ 'night', 'day', 'duty' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 350, 450, 100 ], label: 'Series A' },
      
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  constructor(private ph:PharmacyService) {
  }
  ngOnInit() :void{

    this.percntagetype();
  }

  percntagetype()
  {



    
this.ph.gettype().subscribe(
  (data: Percentage[]) => {
    // Map the data to the appropriate format for the chart
    const chartData = data.map((item) => item.count);
    const chartLabels = data.map((item) => item.type);

    // Update the chart data and labels
    this.doughnutChartDatasets[0].data = chartData;
    this.doughnutChartLabels = chartLabels;
  },
  (error) => {
    console.error(error);
  }
);
}}
