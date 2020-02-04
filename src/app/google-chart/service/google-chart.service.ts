import { Injectable } from '@angular/core';
import { ServiceModule } from './service.module';

declare var google: any;

@Injectable({
  providedIn: ServiceModule
})
export class GoogleChartService {

  private google: any;

  constructor() {
    this.google = google;
   }

   getGoogle(){
     return this.google;
   }
}
