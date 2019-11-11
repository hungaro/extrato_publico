import { FiltroComponent } from './filtro/filtro.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { ContadorNotasComponent } from './contador-notas/contador-notas.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import {ChartModule} from 'primeng/chart';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';


@NgModule({
  declarations: [ FiltroComponent, ContadorNotasComponent, DoughnutComponent ],
  imports: [
    CommonModule,
    ComponentesRoutingModule,
    NgSelectModule,
    FormsModule,


  ],
  exports: [
    FiltroComponent, ContadorNotasComponent, DoughnutComponent
  ]
})
export class ComponentesModule { }
