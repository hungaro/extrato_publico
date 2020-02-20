import { DebitoVereador } from './entity/debitoVereador';
import { Component, OnInit, Input } from '@angular/core';

import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


   mes = 10;
   ano = 2019;
  dados: DebitoVereador[] ;
  data: any;
  countMeses = [{'mes': 0, 'total':0}];
 // @Input('mes') mes: number;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.buscarDados(this.mes, this.ano);
  }

  selectData(event) {
    // this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
}

  buscarDados(mes, ano){
    this.dados = undefined;
    // this.countMeses = undefined;
    this.dashboardService.getDados(mes, ano).subscribe(
      res => {
        this.dados = res;
        this.countMeses[0] = {'mes': mes, 'total': res.length};
        this.dashboardService.getDados(mes -1, ano).subscribe(
          res => {
            let mesUltimo = mes -1;
            this.countMeses[1] = {'mes': mesUltimo, 'total': res.length};
          }
        );
        this.dashboardService.getDados(mes -2, ano).subscribe(
          res => {
            let mesPenultimo = mes -2;
            this.countMeses[2] = {'mes': mesPenultimo, 'total':res.length}
          }
        )
      }
    );

  }

  receberNovaData(novaData){
    this.mes = novaData.mes;
    this.ano = novaData.ano;
    if(this.mes && this.ano){
      this.buscarDados(this.mes, this.ano)
    }

  }



}
