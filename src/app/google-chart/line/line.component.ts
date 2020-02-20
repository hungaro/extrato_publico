import { Component, OnInit, Input } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  @Input() countMeses;
  atual;
  ultimo;
  penultimo;
  private gLib: any;

  constructor(private gChartService : GoogleChartService) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart', 'line']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {
    this.updateChart();
  }

  ngOnDestroy() {
    this.countMeses = undefined;
  }

updateChart(){
  debugger
  this.atual = this.countMeses[0].total;
  this.ultimo = this.countMeses[1].total;
  this.penultimo = this.countMeses[2].total;
}


  drawChart() {

    var data = new this.gLib.visualization.DataTable();
    data.addColumn('number', 'X');
      data.addColumn('number', 'notas');
      debugger
      data.addRows([

        [this.countMeses[2].mes, this.penultimo],
        [this.countMeses[1].mes, this.ultimo],
        [this.countMeses[0].mes, this.atual],
      ]);

    var options = {
        height: 400,
        backgroundColor: 'rgb(90, 89, 89)',
        colors: ['red'],
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        }
    };

    var chart = new this.gLib.visualization.LineChart(document.getElementById('chart_line'));
    chart.draw(data, options);
  }


}
