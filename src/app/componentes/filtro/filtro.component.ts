import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  @Output() novaData = new EventEmitter();


  mes = [
    {label: 'Janeiro', value: 1},
    {label: 'Fevereiro', value: 2},
    {label: 'Março', value: 3},
    {label: 'Abril', value: 4},
    {label: 'Maio', value: 5},
    {label: 'Junho', value: 6},
    {label: 'Julho', value: 7},
    {label: 'Agosto', value: 8},
    {label: 'Setembro', value: 9},
    {label: 'Outubro', value: 10},
    {label: 'Novembro', value: 11},
    {label: 'Dezembro', value: 12}
  ];

  ano = [ 2015, 2016 , 2017, 2018, 2019 ];

  selectedMes;
  selectedAno;
  constructor() { }

  ngOnInit() {
  }

  enviarData(){
    this.novaData.emit({"mes": this.selectedMes, "ano": this.selectedAno})
  }

}
