import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DebitoVereador } from '../entity/debitoVereador';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }


  getDados(mes: number, ano: number){
    let url = 'https://app-sisgvconsulta-prd.azurewebsites.net/ws/ws2.asmx/ObterDebitoVereadorJSON';
    // let params = {
    //   'ano': 2019,
    //   'mes': 4
    // }

   return this.http.get<DebitoVereador[]>(url + '?ano='+ano+'&'+'mes='+ mes)
  }
}
