 import { Component, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Offcanvas } from 'bootstrap';
import { Lang } from 'src/app/shared/models/Lang';
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-ab-home-view',
  templateUrl: './ab-home-view.component.html',
  styleUrls: ['./ab-home-view.component.scss'],
})
export class AbHomeViewComponent implements AfterViewInit {
  isOffcanvasOpen = false; // Controla el estado del menú offcanvas
  currentLanguage!: Lang;
  private subscription!: Subscription; // Objeto Lang que contiene código y demás datos del idioma
  offcanvasElement!: HTMLElement;
  offcanvas!: Offcanvas;

  @ViewChild('offcanvasMenu') offcanvasMenu: any;  // Reference to the offcanvas element

  constructor(private langService: LangService) {}

  ngOnInit(): void {
    // Suscribirse a los cambios del idioma actual
    this.subscription = this.langService.currentLanguage$.subscribe(
      (lang) => (this.currentLanguage = lang)
    );
  }

  navigateToSectiones(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
     
      const y = element.getBoundingClientRect().top + window.pageYOffset ;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }


  }

  ngAfterViewInit(): void {
    // Inicializamos el offcanvas al cargar la vista
    const offcanvas = new Offcanvas(this.offcanvasMenu.nativeElement);
    this.offcanvas = offcanvas; // Guardamos la instancia para usarla después
  }

  // Método para navegar a la sección después de cerrar el offcanvas
  navigateToSection(sectionId: string): void {
    // Cerrar el menú offcanvas antes de navegar
    const offcanvasInstance = Offcanvas.getInstance(this.offcanvasMenu.nativeElement);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }

    // Esperamos a que el offcanvas se cierre completamente
    this.waitForOffcanvasToClose().then(() => {
      // Restauramos el desplazamiento en el body
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';

      // Asegurarse de que la sección existe
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        // Usamos scrollTo con coordenadas exactas
        const yPosition = targetElement.offsetTop;
        window.scrollTo({
          top: yPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  // Método para esperar a que el offcanvas se cierre completamente
  private waitForOffcanvasToClose(): Promise<void> {
    return new Promise((resolve) => {
      this.offcanvasMenu.nativeElement.addEventListener('hidden.bs.offcanvas', () => {
        resolve(); // Se resuelve cuando el offcanvas se ha cerrado
      });
    });
  }

  ngOnDestroy(): void {
    // Desuscribirse para evitar fugas de memoria
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
