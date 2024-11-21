import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Lang } from 'src/app/shared/models/Lang';
import { LangService } from 'src/app/shared/services/lang.service';
@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent {
  currentLanguage!: Lang; // Objeto Lang que contiene código y demás datos del idioma
  private subscription!: Subscription;

  constructor(private langService: LangService) {}

  ngOnInit(): void {
    // Suscribirse a los cambios del idioma actual
    this.subscription = this.langService.currentLanguage$.subscribe(
      (lang) => (this.currentLanguage = lang)
    );
  }

  ngOnDestroy(): void {
    // Desuscribirse para evitar fugas de memoria
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}