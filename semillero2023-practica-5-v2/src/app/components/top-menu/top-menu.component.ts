import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home'
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            routerLink: '/clientes'
          }
        ]
      },
      {
        label: 'Coberturas',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-calendar-plus',
            routerLink: '/coberturas/new'
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-calendar',
            routerLink: '/coberturas'
          }
        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }
}
