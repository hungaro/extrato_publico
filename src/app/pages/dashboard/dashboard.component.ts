import { DebitoVereador } from './entity/debitoVereador';
import { Component, OnInit, Input } from '@angular/core';

import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // public lineChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  // ];
  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions: ChartOptions   = {
  //   responsive: true
  // };
  // public lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,0,0,0.3)',
  //   },
  // ];
  // public lineChartLegend = true;
  // public lineChartType = 'line';
  // public lineChartPlugins = [];
   mes = 10;
   ano = 2019;
  dados: DebitoVereador[] ;
  data: any;
 // @Input('mes') mes: number;

  constructor(
    private dashboardService: DashboardService
  ) {
    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };
  }

  ngOnInit() {
    this.buscarDados(this.mes, this.ano);
  }

  selectData(event) {
    // this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
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
