import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Lang } from 'src/app/shared/models/Lang';
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-ab-home-view',
  templateUrl: './ab-home-view.component.html',
  styleUrls: ['./ab-home-view.component.scss'],
})
export class AbHomeViewComponent {
  isOffcanvasOpen = false; // Controla el estado del menú offcanvas
  currentLanguage!: Lang;
  private subscription!: Subscription; // Objeto Lang que contiene código y demás datos del idioma
  constructor(private langService: LangService) {}
  ngOnInit(): void {
    // Suscribirse a los cambios del idioma actual
    this.subscription = this.langService.currentLanguage$.subscribe(
      (lang) => (this.currentLanguage = lang)
    );
  }

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

  ngOnDestroy(): void {
    // Desuscribirse para evitar fugas de memoria
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
