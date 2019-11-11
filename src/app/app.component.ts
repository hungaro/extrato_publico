import { Component, ChangeDetectorRef } from '@angular/core';
import { MenuLateralService } from './componentes/menu-lateral/menu-lateral.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExtratoPublico';
  openMenu= true;

  constructor (
    private menuLateralService: MenuLateralService,
    private cdRef:ChangeDetectorRef
    ){

  }

  ngOnInit() {
    this.menuLateralService.showMenu.subscribe(
      open => {
        this.openMenu = open;
        this.cdRef.detectChanges();
      }
    );
  }
}
