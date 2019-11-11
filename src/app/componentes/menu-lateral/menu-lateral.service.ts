import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuLateralService {

  constructor() { }

  showMenu = new EventEmitter<Boolean>();

}
