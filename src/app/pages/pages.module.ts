import { ComponentesModule } from './../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ChartModule} from 'primeng/chart';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [ DashboardComponent, LoginComponent ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ComponentesModule,
    ChartModule
  ]
})
export class PagesModule { }
