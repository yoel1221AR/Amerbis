/* import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-what-we-do",
  templateUrl: "./what-we-do.component.html",
  styleUrls: ["./what-we-do.component.scss"],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition(':enter', [
        animate('300ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({
          opacity: 0,
          transform: 'translateY(20px)'
        }))
      ])
    ])
  ]
})
export class WhatWeDoComponent implements OnInit {

  activeComponent: string | null = 'Personal-Temporario';
  constructor() {}

  ngOnInit(): void {}

  showComponent(component: string): void {
    this.activeComponent = component;
  }
}
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-what-we-do",
  templateUrl: "./what-we-do.component.html",
  styleUrls: ["./what-we-do.component.scss"],
  animations: [
    trigger('slideInFromRight', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(100%)',  // Lo mueve completamente fuera de la vista
      })),
      transition(':enter', [
        animate('900ms ease-out', style({
          opacity: 1,
          transform: 'translateX(0)',  // El componente entra en su posición original
        }))
      ]),
      transition(':leave', [
        // Animación rápida para ocultar el componente
        animate('0ms ease-in', style({
          opacity: 0,
          transform: 'translateX(100%)',  // Mueve el componente fuera de la vista
        }))
      ])
    ])
  ]
})
export class WhatWeDoComponent implements OnInit {

  activeComponent: string | null = 'Personal-Temporario';  // Componente activo

  constructor() {}

  ngOnInit(): void {}

  showComponent(component: string): void {
    this.activeComponent = component;
  }
}
