import { Component } from '@angular/core';

@Component({
  selector: 'app-ab-home-view',
  templateUrl: './ab-home-view.component.html',
  styleUrls: ['./ab-home-view.component.scss'],
})
export class AbHomeViewComponent {
  isOffcanvasOpen = false; // Controla el estado del menú offcanvas

  constructor() {}

  // Método para manejar el desplazamiento hacia una sección
  navigateToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = 50; // Ajuste para el espacio superior
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }

  
  }

  // Método para abrir/cerrar el menú offcanvas
  toggleOffcanvas() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
  }

  abrirClienteCorreo(): void {
    const correoDestino = 'info@gruposysconstrucciones.com.ar';
    const url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correoDestino}`;
    window.open(url, '_blank');
  }


  navigateToSectiones(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = 50; // Ajuste para el espacio superior
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    this.toggleOffcanvas(); // Cierra el menú después de navegar
  }
}
