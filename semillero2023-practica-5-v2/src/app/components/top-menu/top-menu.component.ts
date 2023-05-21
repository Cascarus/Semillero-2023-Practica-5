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
        label: 'Clientes',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Agregar cliente',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: '/clientes/new'
          },
          {
            label: 'Buscar cliente',
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
            label: 'Agregar cobertura',
            icon: 'pi pi-fw pi-calendar-plus',
            routerLink: '/coberturas/new'
          },
          {
            label: 'Buscar Cobertura',
            icon: 'pi pi-fw pi-calendar',
            routerLink: '/coberturas'
          }
        ]
      },
      {
        label: 'Polizas',
        icon: 'pi pi-fw pi-shield',
        items: [
          {
            label: 'Emision poliza',
            icon: 'fas fa-clock',
            routerLink: '/polizas/new'
          },
          {
            label: 'Consultar poliza',
            icon: 'pi pi-fw pi-calendar',
            routerLink: '/polizas'
          },
          {
            label: 'Siniestros',
            icon: 'pi pi-fw pi-calendar',
            items:[
              {
                label: 'Agregar Siniestro',
                icon: 'Consulta',
                routerLink: '/coberturas/new'
              },
              {
                label: 'Consulta Siniestro',
                icon: 'pi pi-fw pi-calendar',
                routerLink: '/coberturas'
              },
            ]

          }
        ]
      },
      {
        label: 'Facturas',
        icon: 'pi pi-fw pi-file-edit',
        items: [
          {
            label: 'Agregar Factura',
            icon: 'pi pi-fw pi-calendar-plus',
            routerLink: '/coberturas/new'
          },
          {
            label: 'Buscar Factura',
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
