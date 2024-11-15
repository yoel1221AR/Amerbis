import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss'],
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
export class WorkWithUsComponent implements OnInit {

  activeComponent: string | null = 'Amerbis-experience';
  constructor() {}

  ngOnInit(): void {}

  showComponent(component: string): void {
    this.activeComponent = component;
  }

  
}
