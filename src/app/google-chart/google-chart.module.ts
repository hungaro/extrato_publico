import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from './service/service.module';
import { DonutComponent } from './donut/donut.component';
import { AreaComponent } from './area/area.component';
import { LineComponent } from './line/line.component';

@NgModule({
  declarations: [DonutComponent, AreaComponent, LineComponent],
  imports: [
    CommonModule,
    ServiceModule
  ],
  exports: [DonutComponent, AreaComponent, LineComponent]
})
export class GoogleChartModule { }
