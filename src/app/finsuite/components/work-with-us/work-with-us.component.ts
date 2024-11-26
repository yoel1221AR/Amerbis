/* import { animate, state, style, transition, trigger } from '@angular/animations';
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
 */

 import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss'],
})
export class WorkWithUsComponent implements OnInit {
  activeComponent: string | null = 'Amerbis-experience';
  
  constructor() {}

  ngOnInit(): void {}

  showComponent(component: string): void {
    this.activeComponent = component;
    this.scrollToSection(component);  // Controlar el scroll después de cambiar la sección
  }

  // Controlar el desplazamiento hacia la sección seleccionada
  private scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Hacer scroll suave hacia el objetivo
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Se asegura de que la sección se coloque al principio de la pantalla
      });
    }
  }
}
 
/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss'],
})
export class WorkWithUsComponent implements OnInit {
  // La variable para controlar qué componente está activo
  activeComponent: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  // Método para alternar la sección activa
  toggleComponent(component: string): void {
    // Si la sección ya está activa, la colapsamos; si no, la activamos
    if (this.activeComponent === component) {
      this.activeComponent = null; // Si la sección ya está activa, la colapsamos
    } else {
      this.activeComponent = component; // Si no, activamos la nueva sección
    }
  }
}
 */