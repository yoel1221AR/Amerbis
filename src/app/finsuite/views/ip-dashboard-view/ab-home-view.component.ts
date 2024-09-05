import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-ab-home-view',
  templateUrl: './ab-home-view.component.html',
  styleUrls: ['./ab-home-view.component.scss'],
})
export class AbHomeViewComponent{
 
  constructor(
    private el: ElementRef
  ) {}

  navigateToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -90; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({ top: y, });
    }
  }

  abrirClienteCorreo(): void {
    const correoDestino = 'info@gruposysconstrucciones.com.ar';
    const url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correoDestino}`;
    window.open(url, '_blank');
  }
}