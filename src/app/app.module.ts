import { MenuComponent } from './componentes/menu/menu.component';
import { ComponentesModule } from './componentes/componentes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    SlideMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
