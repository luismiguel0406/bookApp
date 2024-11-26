import { Component } from '@angular/core';
import { MenuSidenavItem } from '../../interfaces/menuSidenavItem.interface';


@Component({
  selector: 'app-layout-page-book',
  templateUrl: 'layout-page-book.component.html',
})
export class LayoutPageComponent {
  public menuSidenavItems: MenuSidenavItem[] = [
    {
      label: 'List',
      url: './list',
      icon: 'label',
    },
    {
      label: 'New',
      url: './new',
      icon: 'add',
    }
  ];

}