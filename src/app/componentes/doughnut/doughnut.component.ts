import { NomeEgasto } from './entity/nomeEgasto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {

//  @Input() data: obterGastos = [];

 qtdVereador = [];
 qtdVereador2 = new Array();

//  const filterVereadores = (query) => {
//    return this.data.filter(d => d.vereador === query);
//  }

  constructor() {
    // this.data = {
    //   labels: ['A', 'B', 'C'],
    //   datasets: [
    //       {
    //           data: [300, 50, 100],
    //           backgroundColor: [
    //               '#FF6384',
    //               '#36A2EB',
    //               '#FFCE56'
    //           ],
    //           hoverBackgroundColor: [
    //               '#FF6384',
    //               '#36A2EB',
    //               '#FFCE56'
    //           ]
    //       }]
    //   };
   }

  ngOnInit() {
    // console.log(this.data);
    // this.calculaQtdVereadores(this.data);
    // this.qtdVereador = this.data;

    // this.qtdVereador = this.data.filter(function(elem, i, data) {
    //   // for(let j = 0; j <= data.length; j++){
    //   //   if(elem.VEREADOR.toLowerCase() === data[j].VEREADOR.toLowerCase()
    //   //   && elem.CHAVE )
    //   // }
    //   debugger
    //     return elem.VEREADOR.toLowerCase() === data[i].VEREADOR.toLowerCase()
    //            && elem.VALOR != data[i].VALOR;

    // })
    // console.log(this.qtdVereador);
  }


  // calculaQtdVereadores(value){
  //   for(let i=0; i < value.length; i++){
  //     let ver = value[i].VEREADOR;
  //     debugger
  //     for(let j=0; j <= i; j++){
  //       if(ver === value[j].VEREADOR && ){

  //         let totalGasto = this.qtdVereador[j].Total + value[i].VALOR;
  //         let vereadorAtualizado = { 'Nome': ver, 'Total': totalGasto}
  //         this.qtdVereador[j] = { 'Nome': ver, 'Total': value[i].VALOR};
  //       } else {
  //         this.qtdVereador.push({ 'Nome': ver, 'Total': value[i].VALOR});
  //       }
  //     }
  //   }
  //   console.log(this.qtdVereador)
  //  }
 }

