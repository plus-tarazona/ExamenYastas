import { Component, OnInit } from '@angular/core';
import { IMenu } from '../../interfaces/menu.interface';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  optionList: IMenu[];

  constructor(private menuService: MenuService) {
    this.optionList = [
      { label: 'Bienvenida', url: '/admin' },
      { label: 'Ingredientes populares', url: 'meal/popular-ingredients' },
      { label: 'Platillos', url: 'meal/dish-search' },
      { label: 'Perfil del usuario', url: 'user/user-profile' },
    ];
  }

  ngOnInit(): void {
  }

  optionSelectedHandler(): void {
    this.menuService.optionSelected.next();
  }

}
