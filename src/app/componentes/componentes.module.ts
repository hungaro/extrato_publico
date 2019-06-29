import { FiltroComponent } from './filtro/filtro.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { ContadorNotasComponent } from './contador-notas/contador-notas.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ FiltroComponent, ContadorNotasComponent ],
  imports: [
    CommonModule,
    ComponentesRoutingModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [
    FiltroComponent, ContadorNotasComponent
  ]
})
export class ComponentesModule { }
