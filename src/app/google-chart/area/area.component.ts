import { Component, OnInit, Input } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

export class Notas{
  vereador: string;
  totalDeNotas: number
}

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {

  notas: Notas[] = [];
  private gLib: any;
  @Input() dados;

  constructor(private gChartService : GoogleChartService) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {
    this.filterDados()
  }

  ngOnDestroy() {
    this.dados = undefined;
  }

  filterDados(){
    // this.dados.filter((a) => {
      this.dados.filter(b => {

        // if(a.VEREADOR == b.VEREADOR){
          let index = this.notas.map(function(e){ return e.vereador}).indexOf(b.VEREADOR);
           if(index === -1){
            this.notas.push({'vereador': b.VEREADOR, 'totalDeNotas': 1})
           } else if (index > -1){
              const tNotas = this.notas[index].totalDeNotas;
              this.notas.splice(index, 1, {'vereador': b.VEREADOR, 'totalDeNotas': tNotas + 1});
           }
           // this.notas.push({'vereador': a.VEREADOR, 'totalDeNotas': 1})
           // this.notas.splice(index, 0, {'vereador': a.VEREADOR, 'totalDeNotas': 1});
          //  console.log(cont, b.vereador)
        // }
      })
    // })
  }

  drawChart() {
    let dataNotas= [];
    dataNotas.push(["Element", "notas", { role: "style" } ],)
    this.notas.filter(a => {
      dataNotas.push([a.vereador, a.totalDeNotas, "red"])
    })
    var data = this.gLib.visualization.arrayToDataTable(
      dataNotas
    );

    var options = {
       title: "Total de notas emitidas por vereador",
        height: 400,
        bar: {groupWidth: "65%"},
        legend: { position: "none" },
        backgroundColor: 'rgb(90, 89, 89)',
        colors: ['white']
    };

    var chart = new this.gLib.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

}
