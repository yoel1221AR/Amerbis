
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-what-we-do",
  templateUrl: "./what-we-do.component.html",
  styleUrls: ["./what-we-do.component.scss"],
})
export class WhatWeDoComponent implements OnInit {

  activeComponent: string | null = 'Personal-Temporario';  // Componente activo

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
