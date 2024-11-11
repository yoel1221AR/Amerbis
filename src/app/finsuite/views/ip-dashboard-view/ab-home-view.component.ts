/* import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';


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
      const yOffset = -5; 
      const y = element.getBoundingClientRect().top + window.pageYOffset ;
  
      window.scrollTo({ top: y, });
    }
  }

  abrirClienteCorreo(): void {
    const correoDestino = 'info@gruposysconstrucciones.com.ar';
    const url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correoDestino}`;
    window.open(url, '_blank');
  }
} */
  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  
  @Component({
    selector: 'app-ab-home-view',
    templateUrl: './ab-home-view.component.html',
    styleUrls: ['./ab-home-view.component.scss'],
  })
  export class AbHomeViewComponent {
  
    constructor(private router: Router) {}
  
    // Esta función maneja la navegación y desplazamiento
    navigateToSection(sectionId: string) {
      // Navegar a la ruta específica
      this.router.navigate([sectionId]).then(() => {
        // Desplazar la página hasta la sección correspondiente
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -5; // Ajusta el desplazamiento si es necesario
          const y = element.getBoundingClientRect().top + window.pageYOffset;
          
          // Desplazamiento suave
          window.scrollTo({
            top: y + yOffset,
            behavior: 'smooth'
          });
        }
      });
    }
  
    abrirClienteCorreo(): void {
      const correoDestino = 'info@gruposysconstrucciones.com.ar';
      const url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correoDestino}`;
      window.open(url, '_blank');
    }
  }
  