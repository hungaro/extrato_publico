import { Component, OnInit, Input } from '@angular/core';
import { GoogleChartService } from  '../service/google-chart.service';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  @Input() dados;
  @Input() id;
  private gLib: any;

  constructor(private gChartService : GoogleChartService) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {
  }

  drawChart() {
    let data = this.gLib.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    let options = {
      pieHole: 0.4,
      backgroundColor: '#5a5959',
    };

    let chart = new this.gLib.visualization.PieChart(document.getElementById(this.id));
    chart.draw(data, options);
  }

}
