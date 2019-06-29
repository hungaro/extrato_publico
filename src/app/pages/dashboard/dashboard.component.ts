import { DebitoVereador } from './entity/debitoVereador';
import { Component, OnInit, Input } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true
  // };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  mes;
  ano;
  dados: DebitoVereador[] ;
 // @Input('mes') mes: number;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
  //this.buscarDados(this.mes, this.ano);
  }

  buscarDados(mes, ano){
    this.dashboardService.getDados(mes, ano).subscribe(
      res => {
        this.dados = res;
      }
    )
  }

  receberNovaData(novaData){
    this.mes = novaData.mes;
    this.ano = novaData.ano;
    if(this.mes && this.ano){
      this.buscarDados(this.mes, this.ano)
    }

  }



}
