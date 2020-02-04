import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from './service/service.module';
import { DonutComponent } from './donut/donut.component';
import { AreaComponent } from './area/area.component';

@NgModule({
  declarations: [DonutComponent, AreaComponent],
  imports: [
    CommonModule,
    ServiceModule
  ],
  exports: [DonutComponent, AreaComponent]
})
export class GoogleChartModule { }
